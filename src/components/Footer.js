import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  padding: 64px 104px 72px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
`

const Footer = (props) => {
  return (
    <Container>
      <div>
        <h3>Medical Costs</h3>
        <p>
          Copyright ©2024. All rights reserved. Website for personal,
          non-commercial use only.
        </p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada
          ac nunc vel auctor. Integer convallis tristique laoreet. Sed purus
          leo, feugiat sit amet dui luctus, congue feugiat tortor. Aliquam
          tempus vitae arcu nec dictum.
        </p>
        <p>Email us</p>
      </div>
    </Container>
  )
}

export default Footer
