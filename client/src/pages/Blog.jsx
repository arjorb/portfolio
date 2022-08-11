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
`

export default Blog