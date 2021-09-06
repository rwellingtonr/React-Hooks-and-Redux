import React, { useEffect } from "react"
import { useDispatch, useSelector } from "redux"
import { fetchUsersAction } from "../../store/actions"

const UserOptions = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.fetchUsers)

  useEffect(() => {
    dispatch(fetchUsersAction(dispatch))
    console.log(users)
  }, [])
  console.log(users)

  return users.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <details>
        <summary>Users list</summary>
        <section></section>
      </details>
    </div>
  )
}

export default UserOptions
