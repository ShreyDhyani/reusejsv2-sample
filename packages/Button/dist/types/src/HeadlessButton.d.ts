import React, { FC } from "react";
export interface HeadlessButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    busy?: boolean;
    busyText?: React.ReactNode;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    onFocus?: (e: React.FocusEvent<HTMLButtonElement, Element>) => void;
    onBlur?: (e: React.FocusEvent<HTMLButtonElement, Element>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const HeadlessButton: FC<HeadlessButtonProps>;
export default HeadlessButton;
