import React from 'react'
import styled from 'styled-components';
import Card from '../components/Project/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Project = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Card/>
    <Card/>
    <Card/>
    </Container>
    <Footer/>
    </>
  )
}

const Container = styled.div`
  margin-top: 3rem;
`

export default Project