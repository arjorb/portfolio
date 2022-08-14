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
        <input type="text" placeholder='Full name'required/>
        <input type="email" placeholder='Email'required/>
    </div>
    <div className='message-input'>
        <textarea name="" id="" cols="91" rows="7" placeholder='Your message'></textarea>
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
            height: 50px;
            font-size: 1rem;
            font-weight: 550;
            font-family: 'Satoshi', sans-serif;
            color: #fff;
            outline: none;
            border:solid 2px #001f33;
            padding-left: 5px;
            background: transparent;
            border-radius: 7px;
            transition: all 250ms ease-in-out;
            :focus{
                border: solid 2px #1c4b97;
            }
        }
    }
    .message-input{
        margin: 1rem 0;
        textarea{
            font-size: 1rem;
            font-weight: 550;
            font-family: 'Satoshi', sans-serif;
            color:#fff;
            outline: none;
            border:solid 2px #001f33;
            padding-top: 5px;
            padding-left: 5px;
            background: transparent;
            border-radius: 5px;
            resize: none;
            transition: all 250ms ease-in-out;
            :focus{
                border: solid 2px #1c4b97;
            }
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
            transition: all 300ms ease-in-out;
            :hover{
                background-color: rgba(0, 153, 255,0.71);
            }
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