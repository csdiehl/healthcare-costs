import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  height: 317px;
  background: #eff8ff;
  box-sizing: border-box;
  position: relative;
  padding: 0 104px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`

const Header = styled.h1`
  color: #0a3d62;
  font-size: 6rem;
  font-weight: 400;
  line-height: 120%;
  margin: 0;
  padding: 0;
  word-break: break-all;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`

const Title = styled.div`
  position: absolute;
  bottom: 40px;
`

const Subhead = styled.p``

const Hero = ({ title, description }) => {
  return (
    <Container>
      <Title>
        <Header>{title}</Header>
        <Subhead>{description}</Subhead>
      </Title>
    </Container>
  )
}

export default Hero
