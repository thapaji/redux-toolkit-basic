import React from "react";
import { decrease } from "../counterSlice";
import { useDispatch } from "react-redux";

export const MinusCounter = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrease())}>-</button>;
};