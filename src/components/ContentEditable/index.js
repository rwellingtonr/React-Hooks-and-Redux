import React from "react"

import { shallowEqual, useSelector } from "react-redux"

export default function Editable() {
  const qty = 10
  // Phone list
  const comments = useSelector(
    (state) => state.otherData.data.slice(0, qty),
    shallowEqual
  )
  console.log("comments", comments)

  return (
    <section>
      <h2>Phone List</h2>
      <ul contentEditable>
        {/* {phoneList.map((phone) => (
          <li key={phone.id}>{phone.phone}</li>
  ))}*/}
      </ul>
    </section>
  )
}
