import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


const Login = () => {
  return (
    <>
    <Navbar/>
      <Container>
        <div className='container'>
          <form>
            <div className='brand'>
              <h1>
                Hello Again<span>!</span>
              </h1>
              <span>
                Don't have an account yet? <Link to='/complexsign'>Sign In</Link>
              </span>
            </div>
            <div className='input'>
              <div className='input-form'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  
                />
              </div>
              <div className='input-form'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                 
                />
              </div>
              <div className='input-form'>
                <label htmlFor='confirmPassword'>Forget Password</label>
              </div>
              <button type='submit'> Sign In </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer/>
    </>
  );
};


const Container = styled.div`
margin-top: 9rem;

  form {
    max-width: 450px;
    height: 500px;
    font-family: poppins;
  }
  label {
    color: #8f9bac;
    font-size: 1rem;
    font-weight: 450;
    cursor: pointer;
  }
  input {
    height: 2.5rem;
    background: #18191b;
    border: none;
    border-radius: 0.3rem;
    outline: none;
    color: #dddddd;
    font-size: 1rem;
    padding-left: 0.3rem;
    transition: all 250ms ease-in-out;
    :focus{
        background:#25262a;
    }
  }
  h1 {
    font-size: 2.5rem;
    span {
      color: #1a85f3;
    }
  }
  a {
    text-decoration: none;
    color: #1a85f3;
    padding-left: 0.5rem;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }
  .input-form {
    width: 100%;
    margin-top: 1.3rem;
    display: flex;
    flex-direction: column;
  }
  button {
    max-width: 30%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    border-radius: 50px;
    border: none;
    font-size: 1rem;
    background: #1a85f3;
    color: #ffffff;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;
export default Login;
