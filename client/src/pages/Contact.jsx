import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
    <Container>
    <div className='title'>
        <p className='contact-me'>· Contact me</p>
        <p className='advice'>Want tech industry advice or just want to talk about life? I got you.</p>
    </div>
    <div className='input-group'>
        <input type="text" placeholder='Full name'/>
        <input type="text" placeholder='Email'/>
    </div>
    <div className='message-input'>
        <textarea name="" id="" cols="75" rows="10" placeholder='Your message'></textarea>
    </div>
    <div className='submit-input'>
        <button>Send message</button>
        <p><span> arjorb@gmail.com</span></p>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    margin-top: 5rem;
    .title{
        .contact-me{
            font-size: 1.4rem;
            font-weight: 550;
            color: #F9FAFB;
            opacity: 0.4;
        }
        .advice{
            margin: 1.5rem 0;
            font-size: 2.5rem;
            font-weight: 550;
        }
    }
    .input-group{
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        input{
            width: 100%;
            height: 40px;
            font-size: 1rem;
            font-size: 550;
            color: #fff;
            outline: none;
            border: none;
            padding-left: 5px;
            background: #09192E;
            border-radius: 5px;
        }
    }
    .message-input{
        margin: 1rem 0;
        textarea{
            font-size: 1rem;
            color:#fff;
            outline: none;
            border: none;
            padding-top: 5px;
            padding-left: 5px;
            background: #09192E;
            border-radius: 5px;
        }

    }
    .submit-input{
        display: flex;
        gap: 2rem;
        align-items: center;
        button{
            border: none;
            padding: 1rem 2rem;
            background-color: rgb(0, 153, 255);
            color:#fff;
            font-size: 1rem;
            font-weight: 550;
            border-radius: 5px;
            cursor: pointer;
        }
        p{
            font-size: 1.2rem;
            font-weight: 550;
            color: #F9FAFB;
            opacity: 0.4;
        }
    }
`
export default Contact