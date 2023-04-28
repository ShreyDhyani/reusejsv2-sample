import React, { useState } from 'react';
import { ReuseButton } from '@shared-test/reusejsv2-sample-button';
import { ReuseTextInput, ReusePasswordInput } from '@shared-test/reusejsv2-sample-text-input';
import { twMerge } from 'tailwind-merge';

const useHeadlessLogin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log("Log into api>>>", props.loginAPI);
        console.log("With Email>>>", email);
        console.log("With Password>>", password);
        return true;
    };
    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
    };
};

const ReuseLoginForm = (props) => {
    const { email, setEmail, password, setPassword, handleLogin } = useHeadlessLogin({ loginAPI: "sample" });
    const [busy, setBusy] = useState(false);
    return (React.createElement("div", { className: twMerge("w-1/3 flex flex-col items-center mx-auto ", props.wrapperClasses) },
        React.createElement(ReuseTextInput, { className: twMerge("px-2", props.emailInputClasses), placeholder: "Email", value: email, onChange: (value) => {
                setEmail(value);
            }, error: email === "" && "Please Enter an Email Address" }),
        React.createElement(ReusePasswordInput, { className: twMerge("px-2", props.passwordInputClasses), placeholder: "Password", value: password, onChange: (value) => {
                setPassword(value);
            } }),
        React.createElement(ReuseButton, { className: twMerge("w-32 mt-2", props.loginButtonClasses), onClick: () => {
                setBusy(true);
                setTimeout(() => {
                    handleLogin();
                    setBusy(false);
                }, 2000);
            }, busy: busy }, "Login")));
};

export { ReuseLoginForm, useHeadlessLogin };
