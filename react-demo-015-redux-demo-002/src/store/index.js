import { createStore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "increase") {
    return { ...state, counter: state.counter + action.value };
  }

  if(action.type === 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter
    }
  }

  return {
    counter: 0,
    showCounter: true
  };
};

const store = createStore(counterReducer);

export default store;
