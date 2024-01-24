import React from "react"
import styled from "styled-components"

const navHeight = 64

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

const Place = styled.h3`
  color: #0a3d62;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const NavBar = ({ state }) => {
  return (
    <Container>
      <Text>
        <Description>
          <h2>Medical costs</h2>
          <p>blah blah blah</p>
        </Description>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <img
            width={16}
            height={16}
            alt="location icon"
            src="./location.svg"
          ></img>
          <Place>{state}</Place>
        </div>
      </Text>
    </Container>
  )
}

export default NavBar
