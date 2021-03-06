import React from "react"
import { shallowEqual, useSelector } from "react-redux"

const UserOptions = () => {
  const users = useSelector((state) => state.fetchData.users, shallowEqual)

  return users.isPending ? (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <h1>Loading</h1>
    </div>
  ) : (
    <div className="bg-light m-3 p-2 border border-2 border-dark rounded-3">
      <h2>Toggled Names</h2>
      <details>
        <summary className="fs-5">User List</summary>
        <section className="ps-3">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </section>
      </details>
    </div>
  )
}

export default UserOptions
