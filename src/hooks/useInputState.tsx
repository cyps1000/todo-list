import { useState } from "react";

export const useInputState = (initialVal: any) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
