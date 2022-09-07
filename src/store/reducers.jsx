import * as ACTION_TYPES from "./action-type";

export const initialState = {
  value: null,
};

export const Modal = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN:
      return {
        state: action.payload,
      };
    case ACTION_TYPES.CLOSE:
      return {
        state,
      };
    default:
      return state;
  }
};
