import styled from 'styled-components';

const Main = (props) => {
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

  return (
    <Container>
      <ShareBox>
        <div>
          <img
            src="/images/user.svg"
            alt="ProPic"
          />
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img
              src="/images/photo-icon.svg"
              alt="Propic Icon"
            />
            <span>Photo</span>
          </button>
          <button>
            <img
              src="/images/video-icon.svg"
              alt="Video Icon"
            />
            <span>Video</span>
          </button>
          <button>
            <img
              src="/images/event-icon.svg"
              alt="Event Icon"
            />
            <span>Event</span>
          </button>
          <button>
            <img
              src="/images/article-icon.svg"
              alt="Article Icon"
            />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img
                src="/images/user.svg"
                alt=""
              />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img
                src="/images/ellipsis.svg"
                alt="Ellipsis Icon"
              />
            </button>
          </SharedActor>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam ullam suscipit
            modi aspernatur fugit ab doloremque deleniti consequuntur culpa, nobis maiores molestiae
            nihil veniam deserunt. Ullam nostrum veniam aut!
          </Description>
          <SharedImage>
            <a>
              <img
                src="/images/shared-image.jpg"
                alt="Image"
              />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                  alt="Reaction"
                />
                <img
                  src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                  alt="Reaction"
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img
                src="/images/like-icon.svg"
                alt="Like"
              />
              <span>Like</span>
            </button>
            <button>
              <img
                src="/images/comment.svg"
                alt="Comment"
              />
              <span>Comment</span>
            </button>
            <button>
              <img
                src="/images/repost.svg"
                alt="Repost"
              />
              <span>Repost</span>
            </button>
            <button>
              <img
                src="/images/send.svg"
                alt="Send"
              />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

export default Main;
