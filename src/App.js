import { Navigate, Route, Routes } from "react-router"
import styled from "styled-components"
import "./App.css"
import Footer from "./components/Footer"
import Page from "./components/Page"
import { useData } from "./components/useData"

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
const defaultState = "CA"
const defaultProcedure = "electrocardiogram-ekg"

// main app
function App() {
  const costs = useData("/data/cost.csv")
  const lookupTable = useData("/data/labels.csv")

  return (
    <Container>
      <Routes>
        {costs && lookupTable && (
          <>
            <Route
              path="/"
              element={
                <Navigate to={`/${defaultProcedure}/${defaultState}`} replace />
              }
            />

            <Route
              path="/:procedure/:state"
              element={<Page costs={costs} lookupTable={lookupTable} />}
            />
          </>
        )}
      </Routes>

      <Line />
      <Footer />
    </Container>
  )
}

export default App
