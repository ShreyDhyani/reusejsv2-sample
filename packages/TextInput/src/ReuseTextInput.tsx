import React from "react";
import HeadlessTextInput, { HeadlessTextInputProps } from "./HeadlessTextInput";
import { twMerge } from "tailwind-merge";

export interface ReuseTextInputProps
  extends Omit<
    HeadlessTextInputProps,
    "className" | "onChange" | "onBlur" | "onFocus"
  > {
  className?: string;
  onChange: (value: string | undefined) => void;
  onBlur?: (value: string | undefined) => void;
  onFocus?: (value: string | undefined) => void;
}

const ReuseTextInput: React.FC<ReuseTextInputProps> = (props) => {
  // mt-1 px-4 bg-white dark:bg-gray-900 block w-full rounded-md border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:ring-gray-500 focus-visible:border-red-400 font-normal sm:text-sm text-gray-900 dark:text-white
  const finalInputClassName = twMerge(
    "bg-white w-full mt-1 rounded-md border-black border rounded-md px-2 py-1",
    props.className
  );

  const finalWrapperClassName = twMerge("w-full", props.wrapperClassName);

  return (
    <HeadlessTextInput
      {...props}
      wrapperClassName={finalWrapperClassName}
      className={finalInputClassName}
      onChange={(e) => {
        props.onChange(e?.target.value);
      }}
      onBlur={(e) => {
        props.onBlur && props.onBlur(e?.target.value);
      }}
      onFocus={(e) => {
        props.onFocus && props.onFocus(e?.target.value);
      }}
    />
  );
};

export default ReuseTextInput;
