import React from "react"
import { useSelector } from "react-redux"

export default function Editable() {
  // Phone list
  const phoneList = useSelector((state) => state.fetchData.users)
  console.log(phoneList)

  return (
    <section>
      <h2>Phone List</h2>
      <ul contentEditable>
        {phoneList.map((phone) => (
          <li key={phone.id}>{phone.phone}</li>
        ))}
      </ul>
    </section>
  )
}
