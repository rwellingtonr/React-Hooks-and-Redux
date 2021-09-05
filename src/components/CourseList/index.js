import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ADD_CORSE } from "../../store/constants"

const CourseList = () => {
  //   Set the State
  const [courseToAdd, setCourseToAdd] = useState("")

  const handleCouseToAdd = (event) => {
    setCourseToAdd(event.target.value)
  }

  //Get the reducer by hooks method
  const courses = useSelector((state) => {
    return state.data
  })
  //   Dispatch the Redux actions
  const dispatch = useDispatch()

  const addCourseToList = () => {
    if (courseToAdd.length) {
      dispatch({ type: ADD_CORSE, title: courseToAdd })
    }
  }

  return (
    <div>
      <ul>
        {/*Loop through the courses constant creating an list with all couses*/}
        {courses.map((couse) => (
          <li key={couse}>{couse}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add a new course"
        onChange={handleCouseToAdd}
      />
      <button type="submit" onClick={addCourseToList}>
        Add Course
      </button>
    </div>
  )
}

export default CourseList
