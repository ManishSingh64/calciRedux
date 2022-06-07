import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  ADDITION,
  SUBSTRACTION,
  MULTIPLICATION,
  DIVISION,
} from "../Store/actionTypes";

export const add = () => ({ type: COUNTER_INCREMENT });
export const substract = () => ({ type: COUNTER_DECREMENT });
export const addition = (value) => ({ type: ADDITION, payload: value });
export const substraction = (value) => ({ type: SUBSTRACTION, payload: value });
export const multiplication = (value) => ({
  type: MULTIPLICATION,
  payload: value,
});
export const division = (value) => ({ type: DIVISION, payload: value });
