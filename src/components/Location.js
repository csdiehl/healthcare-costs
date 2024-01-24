import React from "react"
import styled from "styled-components"

const Place = styled.h3`
  color: #0a3d62;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`
// Generates a location icon and name
const Location = ({ location }) => {
  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <img
        width={16}
        height={16}
        alt="location icon"
        src="./location.svg"
      ></img>
      <Place>{location}</Place>
    </div>
  )
}

export default Location
