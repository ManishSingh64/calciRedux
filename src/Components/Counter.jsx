import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  substract,
  substraction,
  addition,
  multiplication,
  division,
} from "../Store/action";

const Counter = () => {
  const dispatch = useDispatch(); // This useDispatch is used to call reducer function in other component.
  const count = useSelector((state) => state.count); // This useSelector is used to take initial value of state and update state.

  const [value, setValue] = React.useState();

  const handleOnChange = (e) => {
    setValue(+(e.target.value));
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(substract())}>-</button>
      </div>

      <div>
        <input type="number" onChange={(e) => handleOnChange(e)} />

        <button onClick={() => dispatch(addition(value))}>+</button>
        <button onClick={() => dispatch(substraction(value))}>-</button>
        <button onClick={() => dispatch(multiplication(value))}>*</button>
        <button onClick={() => dispatch(division(value))}>/</button>
      </div>
    </div>
  );
};

export default Counter;
