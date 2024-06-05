import { act } from "react";

const defaultState = {
  counter: 0,
};

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCRUISE": {
      state.counter++;
      return { counter: state.counter };
    }
  }
  return state;
};
