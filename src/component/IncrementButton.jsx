import React from "react";
import { useDispatch } from "react-redux";

const IncrementButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment" })}>Increase</button>
    </div>
  );
};

export default IncrementButton;
