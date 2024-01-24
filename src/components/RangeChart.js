import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Chart = styled.div`
  position: relative;
  width: 100%;
`

const Bar = styled.div`
  height: 8px;
  border-radius: 80px;
  background: #f3f7fa;
`

const Range = styled.div`
  height: 8px;
  border-radius: 80px;
  background: #c8f0ff;
  position: absolute;
  top: 0;
  left: calc(${(props) => props.left}% - 8px);
  width: calc(${(props) => props.width}% + 8px);
`

const Data = styled.div`
  position: absolute;
  ${(props) => (props.middle ? "bottom: -4px;" : "top: -4px;")}

  left: calc(${(props) => props.left}%);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
`

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a3d62;
`

const Stat = styled.p`
  font-weight: bold;
  color: #0a3d62;
`

const labels = ["Low", "Average", "High"]

const RangeChart = ({ data, maxValue }) => {
  const [low, avg, high] = data

  return (
    <Container>
      <Chart id="chart">
        <Bar />
        <Range
          left={(low / maxValue) * 100}
          width={((high - low) / maxValue) * 100}
        />
        {data.map((d, i) => {
          const pos = (d / maxValue) * 100
          const val = Math.round(d)
          return d === avg ? (
            <Data key={i} left={pos} middle>
              <Stat>${val}</Stat>
              <p>{labels[i]}</p>
              <Dot />
            </Data>
          ) : (
            <Data key={i} left={pos}>
              <Dot />
              <Stat>${val}</Stat>
              <p>{labels[i]}</p>
            </Data>
          )
        })}
      </Chart>
    </Container>
  )
}

export default RangeChart
