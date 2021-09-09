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
    <section>
      <h2>Comment</h2>
      <ul contentEditable>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.title}</li>
        ))}
      </ul>
    </section>
  )
}
