import React from 'react'
import styled from 'styled-components';
import { HiArrowNarrowRight } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
    <Container>
    <div className='logo'>Uwimana</div>
    <div className='links'>
        <ul>
            <li>skills</li>
            <li>project</li>
            <li>blog</li>
            <li className='linkCallToAction'> <div>Get in touch </div><HiArrowNarrowRight/></li>
        </ul>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
margin: 1rem 0;
font-size: 1.1rem;
font-weight: 550;
color: #F9FAFB;
display: flex;
justify-content: space-between;
.logo{
    color: #3182CE;
    cursor:pointer;
}
.links{
    ul{
        list-style: none;
        display: flex;
        gap: 1.5rem;
        .linkCallToAction{
            display: flex;
            gap: 0.3rem;
            align-items: center;
            justify-content: center;
            color:#3182CE ;
            cursor: pointer;
           }
    }
}
`;

export default Navbar