import React from "react";
import { ReuseTextInputProps } from "./ReuseTextInput";
export interface ReusePasswordInputProps extends ReuseTextInputProps {
    showComponent?: React.ReactNode;
    hideComponent?: React.ReactNode;
    suffixPositionClasses?: string;
}
declare const ReusePasswordInput: React.FC<ReusePasswordInputProps>;
export default ReusePasswordInput;
