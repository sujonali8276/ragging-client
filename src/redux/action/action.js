import { METRIC_ACTION, RESET_ACTION, US_ACTION } from "./actionType";

export const US = (data) => {
  return {
    type: US_ACTION,
    payload: data,
  };
};

export const METRIC = (data) => {
  return {
    type: METRIC_ACTION,
    payload: data,
  };
};

export const RESET = () => {
  return {
    type: RESET_ACTION,
  };
};
