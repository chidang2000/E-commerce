import * as ACTION_TYPES from "./action-type";

export const open = (data) => {
  return {
    type: ACTION_TYPES.OPEN,
    state: data.state,
  };
};

export const close = () => {
  return {
    type: ACTION_TYPES.CLOSE,
  };
};
