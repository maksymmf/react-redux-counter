import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from "../types";

const defaultState = {
    count: 0
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case COUNTER_INCREMENT: {
        return {
          ...state, 
          count: state.count + action.payload
        }
      }
      case COUNTER_DECREMENT: {
        return {
          ...state, 
          count: state.count - action.payload
        }
      }
      case COUNTER_RESET: {
        return {
            ...state,
            count: state.count = action.payload
        }
      }
  
      default: return state;
    }
}