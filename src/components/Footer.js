import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  padding: 64px 104px 72px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 64px 16px 72px;
  }

  p {
    margin: 4px 0;
  }
`

const Footer = () => {
  return (
    <Container>
      <div>
        <h3>Medical Costs</h3>
        <p style={{ color: "#999" }}>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <p>Email us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
