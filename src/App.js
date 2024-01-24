import "./App.css"
import styled from "styled-components"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import { useData } from "./components/useData"
import { formatData } from "./utils"
import { useMemo } from "react"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Line = styled.div`
  margin: 0 104px;
  height: 2px;
  width: calc(100% - 208px);
  background: #dee9f1;
  box-sizing: border-box;
`

// later, these variables will be set dynamically, through routing for example
const STATE = "CA"
const procedure = "electrocardiogram-ekg"

// main app
function App() {
  const costs = useData("./data/cost.csv")
  const lookupTable = useData("./data/labels.csv")

  const data = useMemo(
    () => formatData(costs, lookupTable, STATE, procedure),
    [costs, lookupTable]
  )

  return (
    <Container>
      {data && (
        <>
          <NavBar state={data.location} />
          <Hero title={data.procedure} description={data.description} />
          <MainSection data={data} />
        </>
      )}
      <Line />
      <Footer />
    </Container>
  )
}

export default App
