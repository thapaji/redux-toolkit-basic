import React from "react";

export const MinusCounter = () => {
  const decrease = () => {
    setCount(count - 1);
  };

  return <button onClick={decrease}>-</button>;
};
