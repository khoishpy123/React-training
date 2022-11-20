import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
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
    case ADD_ITEM:
      return {
        ...state,
        allUsers: [...state.allUsers, action.newUser],
      };
    case EDIT_ITEM:
      return {
        ...state,
        allUsers: state.allUsers?.map((item) => {
          if (item?.id === action.User?.id) return action.User;
          return item;
        }),
      };
    case DELETE_ITEM:
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
