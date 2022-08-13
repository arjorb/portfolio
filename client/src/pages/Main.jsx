import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <>
    <Container>
    <div className='title'>
        {/* <p className='subTitle availability'>Not available for work</p> */}
        <p className="mainTitle">I'm John Uwimana 👨🏾‍💻</p>
        <p className="subTitle">Software Developer & Product Designer</p>
    </div>

    <div className='body'>
        <p>I’m a resourceful software Developer with a diverse and promising skill-set 
            who love to build powerful and elegant products with 4 years of 
            experience in tech industry.I love making tools that are user-friendly, simple and delightful.And sometimes I work as a product Designer</p>
    </div>

    <div className='footer'>
        <p>My inbox is always open. Whether you have a question or just want to say hi, feel free <span> to drop me an email </span>to talk about Programming, design or just life in general :) I’ll try my best to get back to you!</p>
        <p><span> twitter </span>. <span>linkedIn</span> . <span>github</span></p>
    </div>
    
    </Container>
    </>
  )
}

const Container = styled.div`
    max-width: 85%;
    margin: 0 auto;
    margin-top: 20%;
    .title{
        font-size: 1rem;
        .subTitle{
            font-size: 1rem;
            font-weight: 550;
            color: #F9FAFB;
            opacity: 0.4;
        }
        .availability{
            margin-bottom: 2rem;
            font-size: 1.3rem;
        }
        .mainTitle{
            color: #F9FAFB;
            font-size: 24px;
            font-weight: 900;
            line-height: 24px;
        }
    }
    .body{
        margin-top: 3rem;
        font-size: 20px;
        font-weight: 500;
        line-height:28px;
        vertical-align:baseline;
        /* font-family: poppins; */
        letter-spacing:-0.4px;
        color: #888888;
        text-align: justify;
        margin: 2rem 0;
    }
    .footer{
        margin-top: 3rem;
        font-size: 20px;
        font-weight: 500;
        line-height:28px;
        vertical-align:baseline;
        letter-spacing:-0.4px;
        color: #888888;
        text-align: justify;
        margin: 2rem 0;
        /* opacity: 0.7; */
        p{
            margin: 1rem 0;
        span{
            color: #0099FF;
            cursor: pointer;
        }}
    }
`;

export default Main