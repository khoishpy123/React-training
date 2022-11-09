// constants
import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_ALL_USERS,
} from '../constants/constants';

export const setAllUsers = (allUsers) => ({
  type: SET_ALL_USERS,
  allUsers,
});

export const addUser = (newUser) => ({
  type: ADD_ITEM,
  newUser,
});

export const editUser = (newUser) => ({
  type: EDIT_ITEM,
  newUser,
});

export const deleteUser = (id) => ({
  type: DELETE_ITEM,
  id,
});
