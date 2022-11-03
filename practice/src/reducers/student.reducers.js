import { SET_ALL_STUDENTS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from '../constants/constants';

export const initialState = {
  allStudents: [], // All products
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_STUDENTS:
      return {
        allStudents: action.allStudents,
      };
    case ADD_ITEM:
      return {
        allStudents: [...state.allStudents, action.newStudent],
      };
    case EDIT_ITEM:
      return {
        ...state,
        allStudents: state.allStudents?.map((item) => {
          if (item?.id === action.student?.id) return action.student;
          return item;
        }),
      };
    case DELETE_ITEM:
      const deleteProduct = state.allStudents.filter((item) => {
        if (item.id === action.id) return false;
        return true;
      });
      return {
        ...state,
        allStudents: deleteStudent,
      };
    default:
      throw new Error('Invalid action');
  }
}
