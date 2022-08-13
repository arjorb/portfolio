import React from 'react'
import styled from 'styled-components';

const Card = () => {
  return (
    <>
    <Container>
    <div className='card'>
        <div className="card-left">
            <div className="card-rectangle"></div>
        </div>
        <div className="card-right">
            <p className='title'>time to have more fun</p>
            <p className='disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque eum sapiente voluptates quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="card-footer">
                <p>Technology used</p>
                <p>Technology used</p>
            </div>
        </div>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
    margin-top: 1.5rem;
    .card{
        display: flex;
        gap: 1rem;  
        .card-left{
            .card-rectangle{
                width: 200px;
                height: 120px;
                background-color: #0a192f;
            }
        }
        .card-right{
            .title{
                font-size: 1.3rem;
                font-weight: 550;
                margin: 0.5rem 0;
            }
            .disc{
                font-size: 0.9rem;
                font-weight: 500;
                text-align: justify;
                color: #c6c7c8;
            }
            .card-footer{
                margin: 0.5rem 0;
                font-size: 0.8rem;
                font-weight: 500;
                color: #8a8a8a;
                display: flex;
                gap: 1rem;
            }
        } 
        }
    `;

export default Card