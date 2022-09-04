import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <div className='title'>
       
        <p className="mainTitle">I'm John Uwimana 👨🏾‍💻</p>
        {/* <p className="subTitle">Software Developer & Product Designer</p> */}
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
    <Footer/>
    </>
  )
}

const Container = styled.div`
    max-width: 85%;
    margin: 0 auto;
    margin-top: 20%;
    .title{
        font-size: 1rem;
        .mainTitle{
            font-size: 24px;
            font-weight: 900;
            line-height: 24px;
            color: #F9FAFB;
        }
    }
    .body{
        margin-top: 3rem;
        font-size: 18px;
        font-weight: 500;
        line-height:28px;
        color: #9CA3AF;
        vertical-align:baseline;
        letter-spacing:-0.4px;
        text-align: justify;
        margin: 2rem 0;
    }
    .footer{
        margin-top: 3rem;
        font-size: 18px;
        font-weight: 500;
        line-height:28px;
        color: #9CA3AF;
        vertical-align:baseline;
        letter-spacing:-0.4px;
        text-align: justify;
        margin: 2rem 0;
        p{
            margin: 1rem 0;
        span{
            color: #0099FF;
            cursor: pointer;
        }}
    }
`;

export default Main