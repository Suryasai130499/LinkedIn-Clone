import styled from 'styled-components';

const Left = (props) => {
  const Container = styled.div`
    grid-area: left;
  `;

  const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
  `;

  const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0 0 0 / 15%);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
  `;

  const CardBackground = styled.div`
    background-image: url('/images/card-bg.svg');
    background-size: 462px;
    background-position: center;
    height: 54px;
    margin: -12px -12px 0;
  `;

  const Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width: 72px;
    height: 72px;
    background-repeat: no-repeat;
    background-clip: content-box;
    background-color: #fff;
    background-position: center;
    background-size: 60%;
    border: 2px solid #fff;
    margin: -38px auto 12px;
    border-radius: 100%;
  `;

  const Link = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgba(0 0 0 / 90%);
    font-weight: 600;
  `;

  const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
  `;

  const Widget = styled.div`
    border-bottom: 1px solid rgba(0 0 0 / 15%);
    padding-block: 12px;

    & > a {
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 12px;
    }

    &:hover {
      background-color: rgba(0 0 0 / 8%);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.33;

        &:first-child {
          color: rgba(0 0 0 / 60%);
        }

        &:last-child {
          color: rgba(0 0 0 / 100%);
        }
      }
    }

    svg {
      color: rgba(0 0 0 / 100%);
    }
  `;

  const Item = styled.a`
    border-color: rgba(0 0 0 / 80%);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;

    span {
      display: flex;
      align-items: center;
      color: rbga(0 0 0 / 100%);

      svg {
        color: rgba(0 0 0 / 60%);
      }
    }

    &:hover {
      background-color: rgba(0 0 0 / 8%);
    }
  `;

  const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    a {
      color: #000;
      padding: 4px 12px;
      font-size: 12px;
      vertical-align: super;

      &:hover {
        color: #0a66c2;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &:last-child {
        color: rgba(0 0 0 / 60%);
        text-decoration: none;
        border-top: 1px solid #d6cec2;
        padding: 12px;

        &:hover {
          background-color: rgba(0 0 0 / 8%);
        }
      }
    }
  `;

  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, There!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img
              src="/images/widget-icon.svg"
              alt="Widget"
            />
          </a>
        </Widget>
        <Item>
          <span>
            <img
              src="/images/item-icon.svg"
              alt="Item Icon"
            />
            MyItems
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img
              src="/images/plus-icon.svg"
              alt="Add Icon"
            />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

export default Left;
