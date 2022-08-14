import React from 'react';
import styled from 'styled-components';
import Card from '../components/Blog/Card';

const Blog = () => {
  return (
    <>
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
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