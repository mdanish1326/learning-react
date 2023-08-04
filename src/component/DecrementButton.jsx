import React from "react";
import { useDispatch } from "react-redux";

const DecrementButton = ({ updateValue }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrease</button>
    </div>
  );
};

export default DecrementButton;
