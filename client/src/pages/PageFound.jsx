import React from 'react'
import styled from 'styled-components'
import notFound from '../images/errorPage.png'
const PageFound = () => {
  return (
    <>
    <Container>
        <div className="svg">
            <img src={notFound} alt=""/>
        </div>
    </Container>
    </>
    
  )
}

const Container = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.svg{
    width: 500px;
    height: 500px;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
    }
}
`
export default PageFound