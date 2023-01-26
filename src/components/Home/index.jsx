import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Left from '../Left';
import Main from '../Main';
import Right from '../Right';

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-inline: auto;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'left main right';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
  gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to='/' />}
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving
        </p>
      </Section>
      <Layout>
        <Left />
        <Main />
        <Right />
      </Layout>
    </Container>
  );
};

const mapStatetoProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchtoProps = (dispatch) => ({});

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
