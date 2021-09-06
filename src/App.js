import React, { useEffect } from "react"
import CourseList from "./components/CourseList"
import UserOptions from "./components/UserOptions"
import DataList from "./components/Suites"
import { fetchUsersAction } from "./store/actions"
import { useDispatch } from "react-redux"

export default function App() {
  // Use the Dispatch Hook
  const dispatch = useDispatch()
  //Did mount and update when dispatch runs
  useEffect(() => {
    fetchUsersAction(dispatch)
  }, [dispatch])

  return (
    <div>
      <CourseList />
      <UserOptions />
      <DataList />
    </div>
  )
}
