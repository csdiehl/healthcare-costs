import "./App.css"
import styled from "styled-components"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import { useData } from "./components/useData"
import { max } from "d3-array"

const Container = styled.div`
  margin: 0 auto;
`

const STATE = "CA"
const procedure = "Electrocardiogram (EKG)"

function App() {
  const costs = useData("./data/cost.csv")
  const lookupTable = useData("./data/labels.csv")

  const data = formatData(costs, lookupTable, STATE, procedure)

  console.log(data)
  return (
    <Container>
      <NavBar />
      <Hero />
      {data && <MainSection data={data} />}
      <hr />
      <Footer />
    </Container>
  )
}

function formatData(costs, labels, state, procedure) {
  if (!costs || !labels) return null

  const { id, label_detailed } = labels.find((d) => d.label === procedure)

  const { percent25, percent50, percent75 } = costs.find(
    (d) => d["geo_level"] === state && d.id === id
  )

  // I don't have data for the max value of the chart, so I'm using max of the 75th percentile prices for all states
  const maxPrice = max(
    costs.filter((d) => d.id === id),
    (d) => d.percent75
  )

  return {
    procedure,
    description: label_detailed,
    costs: [+percent25, +percent50, +percent75],
    max: +maxPrice,
  }
}

export default App
