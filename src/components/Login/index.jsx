import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInAPI } from '../../actions';

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 12px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  margin-inline-end: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  width: max-content;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  display: flex;
  align-items: start;
  min-height: 700px;
  padding-block-end: 138px;
  padding-block-start: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    padding-block-end: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    position: absolute;
    width: 700px;
    height: 670px;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: -230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-block-start: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin-block-start: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 60%),
    inset 0 0 0 2px rgba(0, 0, 0, 0%), inset 0 0 0 1px rgba(0, 0, 0, 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to='/home' />}
      <Nav>
        <a href='/'>
          <img
            src='/images/login-logo.svg'
            alt=''
          />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to Professional Community</h1>
          <img
            src='/images/login-hero.svg'
            alt='LinkedIn'
          />
        </Hero>
        <Form>
          <Google
            onClick={() => {
              props.signIn();
            }}
          >
            <img
              src='/images/google.svg'
              alt='Google'
            />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const mapStatetoProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchtoProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
