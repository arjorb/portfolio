import React from 'react'
import styled from 'styled-components'
const PageFound = () => {
  return (
    <>
    <Container>
        <div className="svg">
            <img src="https://i.gifer.com/EKkR.gif" alt="" />
        </div>
        <div className="info">
            <p>Page Not Found 404</p>
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
    .info{
        font-size: 2rem;
        font-weight: 500;
    }
`
export default PageFound