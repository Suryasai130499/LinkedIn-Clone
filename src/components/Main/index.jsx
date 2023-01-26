import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PostModel from '../PostModel';
import { getArticlesAPI } from '../../actions';

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: #fff;

  div {
    button {
      color: rgba(0 0 0 / 60%);
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      display: flex;
      align-items: center;
      font-weight: 600;
      gap: 4px;
      cursor: pointer;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0;

      img {
        width: 48px;
        border-radius: 100%;
        margin-right: 8px;
      }

      button {
        background: #fff;
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0 0 0 / 15%);
        border-radius: 100vmax;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        span {
          font-size: 14px;
          font-weight: 600;
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  padding-right: 40px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      margin-right: 8px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0 0 0 / 100%);
        }

        &:nth-child(n + 2) {
          font-size: 12px;
          font-weight: 400;
          color: rgba(0 0 0 / 60%);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0 0 0 / 90%);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.33;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  list-style: none;
  border-bottom: 1px solid #e9e5df;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;

  & > img {
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 60px;
    z-index: 99999;
  }
`;

const Main = (props) => {
  const { articles, loading } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    props.getArticles();
  }, []);

  return (
    <>
      {articles.length === 0 ? (
        <h1>No Articles Found</h1>
      ) : (
        <Container>
          <ShareBox>
            <div>
              <img
                src={
                  props.user && props.user.photoURL
                    ? props.user.photoURL
                    : '/images/user.svg'
                }
                alt='ProPic'
              />
              <button
                onClick={handleClick}
                disabled={props.loading}
              >
                Start a Post
              </button>
            </div>
            <div>
              <button>
                <img
                  src='/images/photo-icon.svg'
                  alt='Propic Icon'
                />
                <span>Photo</span>
              </button>
              <button>
                <img
                  src='/images/video-icon.svg'
                  alt='Video Icon'
                />
                <span>Video</span>
              </button>
              <button>
                <img
                  src='/images/event-icon.svg'
                  alt='Event Icon'
                />
                <span>Event</span>
              </button>
              <button>
                <img
                  src='/images/article-icon.svg'
                  alt='Article Icon'
                />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {loading && (
              <img
                src='/images/spin-loader.svg'
                alt='Loader'
              />
            )}
            {props.articles.map((article, index) => (
              <Article key={index}>
                <SharedActor>
                  <a>
                    <img
                      src={article.actor.image || '/images/user.svg'}
                      alt=''
                    />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.date.toDate().toLocaleString()}
                      </span>
                    </div>
                  </a>
                  <button>
                    <img
                      src='/images/ellipsis.svg'
                      alt='Ellipsis Icon'
                    />
                  </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImage>
                  <a>
                    {article.sharedImg !== '' ? (
                      <img
                        src={article.sharedImg || '/images/shared-image.jpg'}
                        alt='Post'
                      />
                    ) : (
                      <ReactPlayer
                        url={article.videoUrl}
                        width='100%'
                      />
                    )}
                  </a>
                </SharedImage>
                <SocialCounts>
                  <li>
                    <button>
                      <img
                        src='https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
                        alt='Reaction'
                      />
                      <img
                        src='https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
                        alt='Reaction'
                      />
                      <span>75</span>
                    </button>
                  </li>
                  <li>
                    <a>{article.comments} Comments</a>
                  </li>
                </SocialCounts>
                <SocialActions>
                  <button>
                    <img
                      src='/images/like-icon.svg'
                      alt='Like'
                    />
                    <span>Like</span>
                  </button>
                  <button>
                    <img
                      src='/images/comment.svg'
                      alt='Comment'
                    />
                    <span>Comment</span>
                  </button>
                  <button>
                    <img
                      src='/images/repost.svg'
                      alt='Repost'
                    />
                    <span>Repost</span>
                  </button>
                  <button>
                    <img
                      src='/images/send.svg'
                      alt='Send'
                    />
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}
          </Content>
          <PostModel
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.articleState.loading,
  articles: state.articleState.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
