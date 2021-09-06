import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsersAction } from "../../store/actions"

const UserOptions = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.fetchUsers.users)

  useEffect(() => {
    fetchUsersAction(dispatch)
  }, [dispatch])

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
