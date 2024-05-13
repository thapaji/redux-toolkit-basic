import React from "react";
import { increase } from "../counterSlice";
import { useDispatch } from "react-redux";

export const PlusCounter = () => {
  const dispatch = useDispatch();

  return <button onClick={()=>dispatch(increase())}>+</button>;
};
