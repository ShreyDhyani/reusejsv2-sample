import React, { FC } from "react";
import { HeadlessButtonProps } from "./HeadlessButton";
export interface ReuseMergeExampleButtonProps extends HeadlessButtonProps {
    buttonPrefix?: React.ReactNode;
    buttonSuffix?: React.ReactNode;
}
declare const ReuseMergeExampleButton: FC<ReuseMergeExampleButtonProps>;
export default ReuseMergeExampleButton;
