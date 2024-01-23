import React from "react"
import styled from "styled-components"

const navHeight = 64

const Container = styled.nav`
  width: 100%;
  height: ${navHeight}px;
  box-sizing: border-box;
  padding: 0 104px;
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${navHeight}px;
`

const NavBar = (props) => {
  return (
    <Container>
      <Text>
        <Description>
          <h2>Medical costs</h2>
          <p>blah blah blah</p>
        </Description>

        <h2>California</h2>
      </Text>
    </Container>
  )
}

export default NavBar
