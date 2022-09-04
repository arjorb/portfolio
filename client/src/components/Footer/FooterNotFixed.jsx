import React from 'react'
import styled from 'styled-components';

const FooterNotFixed = () => {
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
    text-align: center;
    margin: 0.5rem 0;
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

export default FooterNotFixed