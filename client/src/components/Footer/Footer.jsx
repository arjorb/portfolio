import React from 'react'
import styled from 'styled-components';
const Footer = () => {

  // const getYear = new Date();
  // console.log(getYear);

  return (
    <>
    <Container>
        <div className='copyright'>
           <p>{`crafted by me © ${new Date().getFullYear()} John Uwimana`}</p> 
        </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    position: fixed;
    bottom: 0.5rem;
    left: 40%;
    text-align: center;
    margin-top: 5rem;
    .copyright{
      p{
        text-align: center;
        font-size: 0.9rem;
        font-weight: 550;
        color: #7e8b98;
        opacity: 0.4;
      }
    }
   
`

export default Footer