import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [input, setInput] = useState(initialState);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>):void => {
    setInput({ ...input, [name]: value });
  };

  const handleReset = (inputReset = initialState ):void => {
    setInput(inputReset)
  }

  return { input, handleChange, handleReset};
};
