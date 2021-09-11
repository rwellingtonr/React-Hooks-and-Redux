import React from "react"
import { useSelector } from "react-redux"

// Change the name to Suite
const Suites = () => {
  const suites = useSelector((state) => state.fetchData.users)

  return (
    <section className="bg-light m-3 p-2 border border-dark rounded-3">
      <h2>Suite</h2>
      <label htmlFor="suites">Choose one Suite</label>
      <input list="suitesList" type="text" name="suites" id="suites" />
      <datalist id="suitesList">
        {suites.map((suite) => (
          <option key={suite.id} value={suite.address.suite}></option>
        ))}
      </datalist>
    </section>
  )
}
export default Suites
