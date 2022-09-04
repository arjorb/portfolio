import React from 'react';
import styled from 'styled-components';
import Card from '../components/Blog/Card';
// import Footer from '../components/Footer/Footer';
import FooterNotFixed from '../components/Footer/FooterNotFixed';
import Navbar from '../components/Navbar/Navbar';

const Blog = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
    <FooterNotFixed/>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1.5rem 0;
`

export default Blog