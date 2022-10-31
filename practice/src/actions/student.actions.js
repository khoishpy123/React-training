// constants
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, SET_ALL_STUDENTS } from '../constants/constants';

export const setAllStudents = (allStudents) => {
  return {
    type: SET_ALL_STUDENTS,
    allStudents,
  };
};

export const addStudent = (newStudent) => {
  return {
    type: ADD_ITEM,
    newStudent,
  };
};

export const editStudent = (newStudent, id) => {
  return {
    type: EDIT_ITEM,
    newStudent,
    id,
  };
};

export const deleteStudent = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};
