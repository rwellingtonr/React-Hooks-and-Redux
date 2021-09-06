import React from "react"
import { useSelector } from "react-redux"

const UserOptions = () => {
  const users = useSelector((state) => state.fetchData.users)

  return users.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div>
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
