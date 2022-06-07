import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  ADDITION,
  SUBSTRACTION,
  MULTIPLICATION,
  DIVISION,
} from "../Store/actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }
    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }
    case ADDITION: {
      state.count = state.count + action.payload;
      return { ...state };
    }
    case SUBSTRACTION: {
      state.count = state.count - action.payload;
      return { ...state };
    }
    case MULTIPLICATION: {
      state.count = state.count * action.payload;
      return { ...state };
    }
    case DIVISION: {
      state.count = state.count / action.payload;
      if(state.count === Infinity){
          alert("Error")
          state.count = 0;
          return {...state}
      }else{
          
          return { ...state };
      }
    }

    default: {
      return state;
    }
  }
};
