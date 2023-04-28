import React from "react";
import { HeadlessTextInputProps } from "./HeadlessTextInput";
export interface ReuseTextInputProps extends Omit<HeadlessTextInputProps, "className" | "onChange" | "onBlur" | "onFocus"> {
    className?: string;
    onChange: (value: string | undefined) => void;
    onBlur?: (value: string | undefined) => void;
    onFocus?: (value: string | undefined) => void;
}
declare const ReuseTextInput: React.FC<ReuseTextInputProps>;
export default ReuseTextInput;
