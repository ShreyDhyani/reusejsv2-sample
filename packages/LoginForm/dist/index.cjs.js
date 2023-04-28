'use strict';

var React = require('react');
var reusejsv2SampleButton = require('@shared-test/reusejsv2-sample-button');
var reusejsv2SampleTextInput = require('@shared-test/reusejsv2-sample-text-input');
var tailwindMerge = require('tailwind-merge');

const useHeadlessLogin = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
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
    const [busy, setBusy] = React.useState(false);
    return (React.createElement("div", { className: tailwindMerge.twMerge("w-1/3 flex flex-col items-center mx-auto ", props.wrapperClasses) },
        React.createElement(reusejsv2SampleTextInput.ReuseTextInput, { className: tailwindMerge.twMerge("px-2", props.emailInputClasses), placeholder: "Email", value: email, onChange: (value) => {
                setEmail(value);
            }, error: email === "" && "Please Enter an Email Address" }),
        React.createElement(reusejsv2SampleTextInput.ReusePasswordInput, { className: tailwindMerge.twMerge("px-2", props.passwordInputClasses), placeholder: "Password", value: password, onChange: (value) => {
                setPassword(value);
            } }),
        React.createElement(reusejsv2SampleButton.ReuseButton, { className: tailwindMerge.twMerge("w-32 mt-2", props.loginButtonClasses), onClick: () => {
                setBusy(true);
                setTimeout(() => {
                    handleLogin();
                    setBusy(false);
                }, 2000);
            }, busy: busy }, "Login")));
};

exports.ReuseLoginForm = ReuseLoginForm;
exports.useHeadlessLogin = useHeadlessLogin;
