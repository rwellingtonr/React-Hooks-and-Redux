import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addCourseToListAction } from "../../store/actions"

const CourseList = () => {
  //   Set the Course
  const [courseToAdd, setCourseToAdd] = useState("")

  //Get the reducer by hooks method
  const courses = useSelector((state) => {
    return state.courses.data
  })

  //   Dispatch the Redux actions
  const dispatch = useDispatch()
  const handleClick = () => {
    if (courseToAdd.length) {
      dispatch(addCourseToListAction(courseToAdd))
    }
  }

  return (
    <div>
      <label htmlFor="coursesList">
        <h1>Courses List</h1>
        <ul>
          {/*Loop through the courses constant creating an list with all couses*/}
          {courses.map((couse) => (
            <li key={couse}>{couse}</li>
          ))}
        </ul>
      </label>
      <input
        id="coursesList"
        type="text"
        placeholder="add a new course"
        onChange={(event) => setCourseToAdd(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-outline-dark"
        onClick={() => handleClick()}
      >
        Add Course
      </button>
    </div>
  )
}

export default CourseList
