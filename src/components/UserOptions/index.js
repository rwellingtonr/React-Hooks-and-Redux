import React from "react"
import { shallowEqual, useSelector } from "react-redux"

const UserOptions = () => {
  const users = useSelector((state) => state.fetchData.users, shallowEqual)

  return users.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <h2>Toggled Names</h2>
      <details>
        <summary>Users list</summary>
        <section>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </section>
      </details>
    </div>
  )
}

export default UserOptions
