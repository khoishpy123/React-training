// constants
import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_ALL_STUDENTS,
} from '../constants/constants';

export const setAllStudents = (allStudents) => ({
  type: SET_ALL_STUDENTS,
  allStudents,
});

export const addStudent = (newStudent) => ({
  type: ADD_ITEM,
  newStudent,
});

export const editStudent = (newStudent) => ({
  type: EDIT_ITEM,
  newStudent,
});

export const deleteStudent = (id) => ({
  type: DELETE_ITEM,
  id,
});
