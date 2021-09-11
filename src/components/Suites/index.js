import React from "react"
import { useSelector } from "react-redux"

// Change the name to Suite
const Suites = () => {
  const suites = useSelector((state) => state.fetchData.users)

  return (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <section>
        <h2>Suite</h2>
        <label className="fs-5 fw-normal me-2" htmlFor="suites">
          Choose a Suite
        </label>
        <input
          className="col-3"
          list="suitesList"
          type="text"
          name="suites"
          id="suites"
        />
        <datalist id="suitesList">
          {suites.map((suite) => (
            <option key={suite.id} value={suite.address.suite}></option>
          ))}
        </datalist>
      </section>
    </div>
  )
}
export default Suites
