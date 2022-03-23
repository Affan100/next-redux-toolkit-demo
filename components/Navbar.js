import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div
        style={{
          background: "green",
          color: "white",
          textAlign: "right",
          paddingRight: "20px",
        }}
      >
        <h1>Counter top: {count}</h1>
      </div>
    </div>
  );
}
