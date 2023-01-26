import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Timestamp } from 'firebase/firestore';

import { postArticleAPI } from '../../actions';

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0 0 0 / 0.8);
  animation: fadein 300ms;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    color: rgba(0, 0, 0, 0.15);
    cursor: pointer;

    img,
    svg {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background-color: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-left: 5px;
    color: rgba(0 0 0 / 0.6);
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
  align-items: center;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  min-width: auto;
  height: 40px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  img {
    margin-right: 5px;
  }

  ${AssetButton} {
    margin-right: 5px;
  }
`;

const PostButton = styled.button`
  height: 36px;
  min-width: 60px;
  border-radius: 100vmax;
  padding-inline: 16px;
  background-color: #0a66c2;
  color: white;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: #004182;
  }

  &:disabled:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    width: 100%;
    height: 35px;
    font-size: 16px;
    padding-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;

const PostModel = (props) => {
  const { setShowModal, showModal } = props;
  const [editorText, setEditorText] = useState('');
  const [shareImage, setShareImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [assetArea, setAssetArea] = useState('');

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === '' || image === undefined) {
      alert(`Not an Image, the file is ${typeof image}`);
    } else setShareImage(image);
  };

  const reset = (e) => {
    e.preventDefault();
    setEditorText('');
    setShareImage('');
    setVideoUrl('');
    setAssetArea('');
    setShowModal(false);
  };

  const switchAssetArea = (area) => {
    setVideoUrl('');
    setShareImage('');
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      console.log('Hello');
      return;
    }

    const payload = {
      image: shareImage,
      video: videoUrl,
      user: props.user,
      description: editorText,
      timestamp: Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  return (
    <>
      {showModal && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(e) => reset(e)}>
                <img
                  src='/images/close-icon.svg'
                  alt='Close'
                />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img
                  src={props.user ? props.user.photoURL : '/images/user.svg'}
                  alt='UserPic'
                  referrerPolicy='no-referrer'
                />
                <span>{props.user ? props.user.displayName : 'Name'}</span>
              </UserInfo>
              <Editor>
                <textarea
                  key={1}
                  value={editorText}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditorText(e.target.value);
                  }}
                  placeholder='What do you want to talk about?'
                  autoFocus={true}
                />
                {assetArea === 'image' && (
                  <UploadImage>
                    <input
                      type='file'
                      accept='image/gif, image/jpeg, image/png, image/jpg'
                      name='image'
                      id='file'
                      style={{
                        display: 'none',
                      }}
                      onChange={handleChange}
                    />
                    <p>
                      <label
                        htmlFor='file'
                        style={{
                          cursor: 'pointer',
                          // pointerEvents: 'none',
                        }}
                      >
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img
                        src={URL.createObjectURL(shareImage)}
                        alt='Shared'
                      />
                    )}
                  </UploadImage>
                )}
                {assetArea === 'media' && (
                  <>
                    <input
                      type='text'
                      placeholder='Please input a video Link'
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                    />
                    {videoUrl && (
                      <ReactPlayer
                        width={'100%'}
                        url={videoUrl}
                      />
                    )}
                  </>
                )}
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  <img
                    src='/images/share-image.svg'
                    alt=''
                  />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea('media')}>
                  <img
                    src='/images/share-video.svg'
                    alt=''
                  />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img
                    src='/images/share-comment.svg'
                    alt='Comment'
                  />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton
                onClick={(e) => {
                  postArticle(e);
                }}
                disabled={editorText === ''}
              >
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
