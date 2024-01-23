import "./App.css"
import styled from "styled-components"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"

const Container = styled.div`
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <MainSection />
      <hr />
      <Footer />
    </Container>
  )
}

export default App
