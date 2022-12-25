import { ADD_TASK, REMOVE_TASK } from "../Constants/action-types";
import data from "../../data";

const initialState = {
  data,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        data: [...state.data, action.payload],
      };
    case REMOVE_TASK:
      return {
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
