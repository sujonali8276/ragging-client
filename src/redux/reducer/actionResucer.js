import { METRIC_ACTION, RESET_ACTION, US_ACTION } from "../action/actionType";

const initialState = {
  age: 25,
  height_ft: 5,
  height_inch: 10,
  height_cm: 160,
  weight: 50,
  gender: "",
  us: false,
  metric: false,
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case US_ACTION:
      return {
        ...action.payload,
      };
    case METRIC_ACTION:
      return {
        ...action.payload,
      };
    case RESET_ACTION:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default actionReducer;
