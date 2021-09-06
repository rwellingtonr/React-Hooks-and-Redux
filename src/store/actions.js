import { ADD_CORSE } from "./constants"

export const addCourseToListAction = (courseToAdd) => {
  return { type: ADD_CORSE, title: courseToAdd }
}
