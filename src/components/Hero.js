import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  height: 317px;
  background: #eff8ff;
  box-sizing: border-box;
  position: relative;
  padding: 0 104px;
`

const Header = styled.h1`
  color: #0a3d62;
  font-size: 6rem;
  font-weight: 400;
  line-height: 120%;
  margin: 0;
  padding: 0;
`

const Title = styled.div`
  position: absolute;
  bottom: 40px;
`

const Subhead = styled.p``

const Hero = (props) => {
  return (
    <Container>
      <Title>
        <Header>Electrocardiogram (EKG)</Header>
        <Subhead>
          An electrocardiogram is a recording of the electrical activity of the
          heart. It may be called an EKG or ECG.
        </Subhead>
      </Title>
    </Container>
  )
}

export default Hero