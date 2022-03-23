import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <h2>Test</h2>
        <button
          aria-label="increament Value"
          onClick={() => {
            dispatch(increament());
          }}
        >
          Increament
        </button>
        <button
          aria-label="Decreament Value"
          onClick={() => {
            dispatch(decreament());
          }}
        >
          Decreament
        </button>
      </div>
    </div>
  );
}
