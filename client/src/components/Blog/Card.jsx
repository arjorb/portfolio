import React from 'react'
import styled from 'styled-components'
import article1 from '../../images/feed-5.jpg';
const Card = () => {
  return (
    <>
    <Container>
    <div className='card-image'>
        <img src={article1} alt="article1" />
    </div>
    <div className='card-metadata'>
        <p>Front-End <span> - 08 oct 2022</span></p>
    </div>
    <div className='card-title'>
        <p>Customer Experience enginnering</p>
    </div>
    <div className='card-description'>
       <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...</p>
    </div>
    <div className='card-button'>
       <button>Read more </button>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    margin: 1.5rem 0;
    max-width: 350px;
    max-height: auto;
    .card-image{
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
           
        }
    }
    .card-metadata{
        margin: 1rem 0;
        p{
            font-size: 1.3rem;
            font-weight: 550;
            color: #0063CF;
            line-height: 26px;
            text-transform: uppercase;
            span{
                color: #647587;
                font-size: 1rem;
                font-weight: 500;
                text-transform: lowercase;
            }
        }
    }
    .card-title{
        font-size: 1.5rem;
        font-weight: 550;
        margin: 1rem 0;
    }
    .card-description{
        color: #647587;
        margin: 1rem 0;
        text-align: justify;
        font-weight: 500;
        p{
        line-height: 26px;
        font-size: 1rem;
        }
    }
    .card-button{
        button{
            border: 2px solid #0063CF;
            padding: 0.8rem 1.8rem;
            color: white;
            background-color: transparent;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 550;
            transition: all 400ms ease-in-out;
            :hover{
                background-color: #0063CF;
                cursor: pointer;
            }
        }
    }
`
export default Card