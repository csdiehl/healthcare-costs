import React from "react"
import styled from "styled-components"
import RangeChart from "./RangeChart"

const Container = styled.section`
  width: 100%;
  height: 441px;
  padding: 80px 104px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

const DataVizCard = styled.div`
  display: flex;
  padding: 24px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #dee9f1;
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
        <DataVizCard>
          <p>Average Price</p>
          <BigNumber>$106</BigNumber>
          <p>California</p>
        </DataVizCard>
        <DataVizCard>
          <p>Typical Price Range</p>
          <RangeChart data={data.costs} maxValue={data.max} />
          <p>California</p>
        </DataVizCard>
      </MainContent>
    </Container>
  )
}

export default MainSection
