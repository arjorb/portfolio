import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { HiArrowNarrowRight } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
    <Container>
    <div className='logo'>Uwimana</div>
    <div className='links'>
        <ul>
            <li>blog</li>
            <li>project</li>
            <li>resume</li>
            <li className='linkCallToAction'>Get in touch </li>
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
/* opacity: 0.7; */
display: flex;
justify-content: space-between;
.logo{
    color: #3B82F6;
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
            color:#3B82F6 ;
            cursor: pointer;
           }
    }
}
`;

export default Navbar