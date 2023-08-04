// import {createStore} from 'redux'
import { legacy_createStore as createStore } from "redux";

const initialState = {
  val: 0,
};

export const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, val: state.val + 1 };
    case "Decrement":
      return { ...state, val: state.val - 1 };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(MyReducer);

export default store;
