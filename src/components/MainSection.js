import React from "react"
import styled from "styled-components"
import RangeChart from "./RangeChart"

const Container = styled.section`
  width: 100%;
  height: 441px;
  padding: 80px 104px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 80px 16px;
  }
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

const cardStyles = `
  border-radius: 2px;
  border: 1px solid #DEE9F1;
  background: #FFF;
  padding: 24px 28px;
  height: 100%;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NumCard = styled.div`
  ${cardStyles}

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const ChartCard = styled.div`
  ${cardStyles}
  width: 100%;
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

      <NumCard>
        <p>Average Price</p>
        <BigNumber>${Math.round(data.costs[1])}</BigNumber>
        <p>{data.location}</p>
      </NumCard>
      <ChartCard>
        <p>Typical Price Range</p>
        {/**NOTE: would really want to use the 95th percentile or similar for the max, but not in data */}
        <RangeChart data={data.costs} maxValue={data.costs[2] + 10} />
        <p>{data.location}</p>
      </ChartCard>
    </Container>
  )
}

export default MainSection
