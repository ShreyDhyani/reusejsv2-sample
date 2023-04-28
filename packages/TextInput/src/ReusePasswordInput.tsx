import React, { useState } from "react";
import ReuseTextInput, { ReuseTextInputProps } from "./ReuseTextInput";
import { twMerge } from "tailwind-merge";

export interface ReusePasswordInputProps extends ReuseTextInputProps {
  showComponent?: React.ReactNode;
  hideComponent?: React.ReactNode;
  suffixPositionClasses?: string;
}

const ReusePasswordInput: React.FC<ReusePasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const suffixClassNames = "text-gray-300 hover:text-gray-600 cursor-pointer";

  // console.log("Props>>", props);

  // console.log(props.suffixPositionClasses);
  // console.log(twMerge("absolute top-2 right-2", props.suffixPositionClasses));

  const passwordButton = (
    <button
      className={twMerge("absolute top-2 right-2", props.suffixPositionClasses)}
      onClick={() => {
        setShowPassword(!showPassword);
      }}
    >
      {showPassword ? (
        props.hideComponent ? (
          props.hideComponent
        ) : (
          <label className={suffixClassNames}>Hide</label>
        )
      ) : props.showComponent ? (
        props.showComponent
      ) : (
        <label className={suffixClassNames}>Show</label>
      )}
    </button>
  );
  return (
    <ReuseTextInput
      {...props}
      className={props.className}
      onChange={props.onChange}
      wrapperClassName="relative"
      textInputSuffix={passwordButton}
      type={showPassword ? "text" : "password"}
    />
  );
};

export default ReusePasswordInput;
