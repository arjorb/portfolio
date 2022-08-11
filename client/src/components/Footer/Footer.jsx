import React from 'react'
import styled from 'styled-components';
const Footer = () => {
  return (
    <>
    <Container>
        <div className='copyright'>
            <p>Crafted by me @2022 John Uwimana</p>
        </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    position: relative;
    bottom: 0.5rem;
    text-align: center;
    z-index: 999;
    margin-top: 5rem;
    p{
        text-align: center;
        font-size: 0.9rem;
        font-weight: 550;
        color: #7e8b98;
            opacity: 0.4;
    }
`

export default Footer