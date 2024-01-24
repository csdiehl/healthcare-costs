import { formatData } from "../utils"
import { useParams } from "react-router"
import { useMemo } from "react"
import NavBar from "./NavBar"
import Hero from "./Hero"
import MainSection from "./MainSection"
import styled from "styled-components"

const Error = styled.div`
  font-size: 4rem;
  font-weight: bold;
  padding: 48px;
`

function Page({ costs, lookupTable }) {
  const { procedure, state } = useParams()

  const data = useMemo(
    () => formatData(costs, lookupTable, state, procedure),
    [costs, lookupTable, procedure, state]
  )

  return (
    <>
      {!data?.error ? (
        <>
          <NavBar state={data.location} />
          <Hero title={data.procedure} description={data.description} />
          <MainSection data={data} />
        </>
      ) : (
        <Error>
          Sorry, that combination of state and procedure isn't in the data
        </Error>
      )}
    </>
  )
}

export default Page
