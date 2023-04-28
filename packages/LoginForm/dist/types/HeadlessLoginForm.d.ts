import React from "react";
export interface HeadlessLoginFormProps {
    wrapperClasses?: string;
    emailField?: React.ReactNode;
    passwordField?: React.ReactNode;
}
declare const HeadlessLoginForm: React.FC<HeadlessLoginFormProps>;
export default HeadlessLoginForm;
