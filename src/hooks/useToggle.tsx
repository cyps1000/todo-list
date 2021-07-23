import { useState } from "react";

export const useToggle = (initialVal: any) => {
  /** Call useState, "reserve piece of state" */
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };
  /** Return piece of state AND a function to toggle it */
  return [state, toggle];
};
