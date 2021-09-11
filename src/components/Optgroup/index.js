import React from "react"

const Optgroup = () => {
  return (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <section>
        <label htmlFor="optgroup">
          <h2>Training Class</h2>
        </label>
        <br />
        <select name="optgroup" id="optgroup">
          <optgroup label="9:30AM">
            <option value="1">First Level Training</option>
            <option value="2">Second Level Traing</option>
            <option value="3">Third Level Traing</option>
          </optgroup>
          <optgroup label="3:00PM">
            <option value="1">First Level Training</option>
            <option value="2">Second Level Traing</option>
            <option value="3">Third Level Traing</option>
          </optgroup>
        </select>
      </section>
    </div>
  )
}

export default Optgroup
