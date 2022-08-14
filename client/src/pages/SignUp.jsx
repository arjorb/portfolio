import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const signUp = () => {

  return (
    <>
      <Container>
        <div className='container'>
          <form >
            <div className='brand'>
              <h2>It's Free</h2>
              <h1>
                Create new account <span>.</span>
              </h1>
              <span>
                Already have an account? <Link to='/login'>Sign In</Link>
              </span>
            </div>
            <div className='input'>
              <div className='input-group'>
                <div className='input-form'>
                  <label htmlFor='firstname'>Firstname</label>
                  <input
                    type='text'
                    name='firstname'
                   
                  />
                </div>
                <div className='input-form'>
                  <label htmlFor='lastname'>Lastname</label>
                  <input
                    type='text'
                    name='lastname'
                    
                  />
                </div>
              </div>
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
                <label htmlFor='confirmPassword'>Confirm password</label>
                <input
                  type='password'
                  name='confirmPassword'
                 
                />
              </div>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top:6.5rem;
  form {
    max-width: 450px;
    height: 500px;
    font-family: poppins;
  }
  label {
    color: #8f9bac;
    font-size: 0.9rem;
    font-weight: 450;
    font-family: poppins;
  }
  input {
    height: 2.5rem;
    background: #18191b;
    border: none;
    outline: none;
    border-radius: 0.3rem;
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
  h2 {
    color: #8f9bac;
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
  .input-group {
    display: flex;
    gap: 1rem;
  }
  .input-form {
    width: 100%;
    margin-top: 0.5rem;
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
export default signUp;
