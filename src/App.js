import React, { useEffect } from "react"
import CourseList from "./components/CourseList"
import UserOptions from "./components/UserOptions"
import Suites from "./components/Suites"
import Editable from "./components/ContentEditable"
import Cite from "./components/Cite"
import { fetchDataAction, fetchUsersAction } from "./store/actions"
import { useDispatch } from "react-redux"
import Optgroup from "./components/Optgroup"

export default function App() {
  // Use the Dispatch Hook
  const dispatch = useDispatch()
  //Did mount and update when dispatch runs
  useEffect(() => {
    fetchUsersAction(dispatch)
    fetchDataAction(dispatch)
  }, [dispatch])

  return (
    <div>
      <div>
        <CourseList />
        <UserOptions />
        <Suites />
        <Editable />
        <Cite />
        <div style={{ height: " 100px" }}>
          <Optgroup />
        </div>
      </div>
    </div>
  )
}
