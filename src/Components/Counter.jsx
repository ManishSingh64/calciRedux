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
    setValue(+e.target.value);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
          onClick={() => dispatch(substract())}
        >
          -
        </button>
        <button
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(add())}
        >
          +
        </button>
      </div>

      <div>
        <input
          style={{ marginTop: "30px", textAlign: "center" }}
          type="number"
          onChange={(e) => handleOnChange(e)}
          placeholder={"Number"}
        />
        <div
          style={{
            margin: "auto",
            border: "1px solid red",
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-evenly",
            width: "42%",
            backgroundColor:"pink",
            height:"60px",
            alignItems:"center"
          }}
        >
          <button
            style={{ width: "40px", height: "40px", cursor: "pointer" ,borderRadius:"50px",border:"none"}}
            onClick={() => dispatch(addition(value))}
          >
            +
          </button>
          <button
            style={{ width: "40px", height: "40px", cursor: "pointer" ,borderRadius:"50px",border:"none"}}
            onClick={() => dispatch(substraction(value))}
          >
            -
          </button>
          <button
            style={{ width: "40px", height: "40px", cursor: "pointer" ,borderRadius:"50px",border:"none"}}
            onClick={() => dispatch(multiplication(value))}
          >
            *
          </button>
          <button
            style={{ width: "40px", height: "40px", cursor: "pointer",borderRadius:"50px",border:"none" }}
            onClick={() => dispatch(division(value))}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
