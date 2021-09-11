import React from "react"

import { shallowEqual, useSelector } from "react-redux"

export default function Editable() {
  const qty = 10
  // Phone list
  const comments = useSelector(
    (state) => state.otherData.data.slice(0, qty),
    shallowEqual
  )

  return (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <section>
        <h2>Comments</h2>
        <ul contentEditable className="text-capitalize">
          {comments.map((comment) => (
            <li key={comment.id}>{comment.title}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
