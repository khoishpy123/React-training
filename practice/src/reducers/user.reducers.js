import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  SET_ALL_USERS,
} from '../constants/constants';

export const initialState = {
  allUsers: [], // All users
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.allUsers,
      };
    case ADD_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.newUser],
      };
    case EDIT_USER:
      return {
        ...state,
        allUsers: state.allUsers?.map((item) => {
          if (item?.id === action.User?.id) return action.User;
          return item;
        }),
      };
    case DELETE_USER:
      const deleteUser = state.allUsers.filter((item) => {
        if (item.id === action.id) return false;
        return true;
      });
      return {
        ...state,
        allUsers: deleteUser,
      };
    default:
      throw new Error('Invalid action');
  }
}
