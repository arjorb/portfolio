import React from 'react'
import styled from 'styled-components';
import Card from '../components/Project/Card';

const Project = () => {
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
  margin-top: 3rem;
`

export default Project