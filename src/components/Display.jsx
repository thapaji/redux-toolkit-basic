import React, { useState } from "react";

export const Display = () => {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
};
