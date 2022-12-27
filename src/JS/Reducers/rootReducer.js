import {
  ADD_TASK,
  DONE_TASKS,
  UNDONE_TASKS,
  REMOVE_TASK,
  TOGGLE_TASK,
  ALL_TASKS,
  EDIT_TASK,
  SEARSH_TASK,
} from "../Constants/action-types";
import data from "../../data";

const initialState = {
  data,
  filtredData: "ALL",search:""
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        data: [...state.data, action.payload],filtredData: "ALL",search:state.search
      };
    case REMOVE_TASK:
      return {
        data: state.data.filter((el) => el.id !== action.payload),filtredData: "ALL",search:state.search
      };
    case TOGGLE_TASK:
      return {
        data: [
          ...state.data,
          (state.data[action.payload ].status =
            !state.data[action.payload].status),
        ].slice(0, state.data.length),
        filtredData:state.filtredData,search:state.search};
    case DONE_TASKS:
      return {
        data:state.data,filtredData: action.payload,search:state.search
      };
    case UNDONE_TASKS:
      return {
        data:state.data,filtredData: action.payload,search:state.search
      };
    case ALL_TASKS:
      return {
        data:state.data,filtredData: action.payload,search:state.search
      };
    case EDIT_TASK:
      return{
        data :[...state.data,(state.data[action.payload.id].task=action.payload.task),state.data[action.payload.id].user=action.payload.user].slice(0, state.data.length),filtredData:'ALL',search:state.search
      }
    case SEARSH_TASK:
      return{
        data:state.data,search:action.payload.toLowerCase().trim(),filtredData:state.filtredData
      }
    default:
      return state;
  }
};

export default rootReducer;
