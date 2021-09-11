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
    <div className="bg-light m-3 pa-2 border border-2 border-dark rounded-3">
      <div className="container ms-2 mb-2">
        <label className="row" htmlFor="coursesList">
          <h1 className="ps-0">Courses List</h1>
          <ul className="ms-1 ps-4">
            {/*Loop through the courses constant creating an list with all couses*/}
            {courses.map((couse) => (
              <li key={couse}>{couse}</li>
            ))}
          </ul>
        </label>
        <div className="row">
          <input
            id="coursesList"
            className="col-3 me-1"
            type="text"
            placeholder="add a new course"
            onChange={(event) => setCourseToAdd(event.target.value)}
          />
          <button
            type="button"
            className="btn col-2 btn-outline-dark"
            onClick={() => handleClick()}
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseList
