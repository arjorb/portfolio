import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
    <Container>
    <Link to='/' className='logo'>Uwimana</Link>
    <div className='links'>
        <ul>
            <Link to='/blog' className='link'>blog</Link>
            <Link to='/project' className='link'>project</Link>
            <Link to='#' className='link'>resume</Link>
            <Link to='/contact' className='linkCallToAction'>Get in touch </Link>
        </ul>
    </div>
    </Container>
    </>
  )
}

const Container = styled.div`
margin: 1rem 0;
font-size: 1.1rem;
font-weight: 450;
color: #F9FAFB;
display: flex;
justify-content: space-between;


.logo{
    color: #3B82F6;
    cursor:pointer;
    text-decoration: none;
}
.links{
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        .link{
            color: #F9FAFB;
            text-decoration: none;
            opacity: 0.9;
        }
        .linkCallToAction{
            color:#3B82F6 ;
            cursor: pointer;
            text-decoration: none;
           }
    }
}
`;

export default Navbar