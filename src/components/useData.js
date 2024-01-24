import { useState, useEffect } from "react"
import { csvParse } from "d3-dsv"

export function useData(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const plainText = await res.text()
      const data = csvParse(plainText)
      setData(data)
    }

    getData()
  }, [url])

  return data
}
