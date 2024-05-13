import React from 'react'

export const PlusCounter = () => {
    const increase = () => {
        setCount(count + 1);
      };
  return (
    <button onClick={increase}>+</button>
  )
}
