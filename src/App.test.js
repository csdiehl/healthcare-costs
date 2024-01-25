import { render, screen } from "@testing-library/react"
import App from "./App"
import RangeChart from "./components/RangeChart"

test("renders chart title", () => {
  render(<App />)
  const title = screen.getByText(/typical price range/i)
  expect(title).toBeInTheDocument()
})

test("renders text nodes for every data point", () => {
  render(<RangeChart data={[50, 100, 200]} maxValue={220} />)
  const low = screen.getByText(/$50/i)
  expect(low).toBeInTheDocument()
})
