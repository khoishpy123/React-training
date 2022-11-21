// constants
import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SET_ALL_USERS,
} from '../constants/constants';

export const setAllUsers = (allUsers) => ({
  type: SET_ALL_USERS,
  allUsers,
});

export const addUser = (newUser) => ({
  type: ADD_USER,
  newUser,
});

export const editUser = (newUser) => ({
  type: EDIT_USER,
  newUser,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});
