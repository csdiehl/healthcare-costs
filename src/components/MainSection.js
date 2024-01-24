import React from "react"
import styled from "styled-components"
import RangeChart from "./RangeChart"

const Container = styled.section`
  width: 100%;
  height: 441px;
  padding: 80px 104px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 350px minmax(0, 1fr);
`

const BigNumber = styled.h2`
  color: #0a3d62;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto auto auto;
  grid-column-gap: 16px;
`

const MainSection = ({ data }) => {
  return (
    <Container>
      <div>
        <TextWrapper>
          <h2>How much does it cost?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </TextWrapper>
      </div>
      <MainContent>
        <p>Average Price</p>
        <p>Typical Price Range</p>
        <BigNumber>$106</BigNumber>
        <RangeChart data={data.costs} maxValue={data.max} />
        <p>{data.location}</p>
        <p>{data.location}</p>
      </MainContent>
    </Container>
  )
}

export default MainSection
