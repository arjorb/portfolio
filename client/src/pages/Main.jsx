import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <>
    <Container>
    <div className='title'>
        <p className='subTitle'>Not available for work</p>
        <p className="mainTitle">I'm John Uwimana 👨🏾‍💻</p>
        <p className="subTitle">Software Developer & Product Designer</p>
    </div>
    
    <div className='body'>
        <p>I’am a software Developer with a diverse and promising skill-set 
            who love to build powerful and elegant products with 3 years of 
            experience in the tech industry.</p>
            <p>I love making tools that are user-friendly, simple and delightful.</p>
            <p>And sometimes I work as a product Design</p>
    </div>

    <div className='footer'>
        <p>My inbox is always open. Whether you have a question or just want to say hi, feel free to drop me a line to talk about Programming, design or just life in general :) I’ll try my best to get back to you!</p>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    margin-top: 25%;
    .title{
        font-size: 1rem;
        .subTitle{
            font-size: 1rem;
            font-weight: 550;
            color: #F9FAFB;
            opacity: 0.4;
        }
        .mainTitle{
            color: #0099FF;
            font-size: 3rem;
            font-weight: 700;
            line-height: 64.8px;
        }
    }
    .body{
        margin-top: 2rem;
        font-size: 1.3rem;
        font-weight: 550;
        color: #F9FAFB;
        opacity: 0.7;
        p{
            margin: 0.7rem 0;
        }
    }
`;

export default Main