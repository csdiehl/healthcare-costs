import React from "react"
import styled from "styled-components"
import Location from "./Location"

const navHeight = 64 // nav height in pixels

const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  width: 100%;
  height: ${navHeight}px;
  box-sizing: border-box;
  padding: 0 104px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
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

const NavBar = ({ state }) => {
  return (
    <Container>
      <Text>
        <Description>
          <h2>Medical costs</h2>
          <p>blah blah blah</p>
        </Description>

        <Location location={state} />
      </Text>
    </Container>
  )
}

export default NavBar
