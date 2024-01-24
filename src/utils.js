import { max } from "d3-array"

export function formatData(costs, labels, state, slug) {
  if (!costs || !labels) return null

  // get the label information
  const { id, label, label_detailed } = labels.find((d) => d.slug === slug)

  // use that to find the percentile values from the other dataset
  const { percent25, percent50, percent75 } = costs.find(
    (d) => d["geo_level"] === state && d.id === id
  )

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
