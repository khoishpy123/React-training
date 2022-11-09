import {
  SET_ALL_USERS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from '../constants/constants';

export const initialState = {
  allUsers: [], // All products
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        allUsers: action.allUsers,
      };
    case ADD_ITEM:
      return {
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
