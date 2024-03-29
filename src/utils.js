import { max } from "d3-array"

export function formatData(costs, labels, state, slug) {
  if (!costs || !labels) return null

  // get the label information
  const labelInfo = labels.find((d) => d.slug === slug)
  if (!labelInfo) return { error: "label info not found" }

  const { id, label, label_detailed } = labelInfo

  const costInfo = costs.find((d) => d["geo_level"] === state && d.id === id)
  if (!costInfo) return { error: "cost info not found" }

  // use that to find the percentile values from the other dataset
  const { percent25, percent50, percent75 } = costInfo

  // I don't have data for the max value of the chart, so I'm using max of the 75th percentile prices for all states
  const maxPrice = max(
    costs.filter((d) => d.id === id),
    (d) => d.percent75
  )

  return {
    procedure: label,
    description: label_detailed,
    costs: [+percent25, +percent50, +percent75],
    max: +maxPrice,
    location: state,
  }
}
