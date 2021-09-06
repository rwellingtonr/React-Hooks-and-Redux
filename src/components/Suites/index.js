import React from "react"
import { useSelector } from "react-redux"

// Change the name to Suite
export default function DataList() {
  const suites = useSelector((state) => state.fetchData.users)
  console.log(suites)
  return (
    <section>
      <label htmlFor="suites">Choose one Suite</label>
      <input list="a" type="text" name="suites" id="suites" />
      <datalist id="a">
        {suites.map((suite) => (
          <option key={suite.id} value={suite.address.suite}></option>
        ))}
      </datalist>
    </section>
  )
}
