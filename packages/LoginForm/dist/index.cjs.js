'use strict';

var React = require('react');
var tailwindMerge = require('tailwind-merge');
var reusejsv2SampleTextInput = require('@shared-test/reusejsv2-sample-text-input');

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

const HeadlessButton = (props) => {
    return (React.createElement("button", { type: props.type, disabled: props.disabled || props.busy, className: props.className, onClick: props.onClick, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, onFocus: props.onFocus, onBlur: props.onBlur }, props.busy ? props.busyText : props.children));
};
HeadlessButton.defaultProps = {
    busyText: "Loading...",
    disabled: false,
    busy: false,
    type: "button",
};

const ReuseMergeExampleButton = (props) => {
    const defaultStyleClasses = "inline-flex justify-center items-center focus:outline-none font-normal text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2 border border-transparent";
    const finalClassNames = tailwindMerge.twMerge(defaultStyleClasses, props.className);
    return (React.createElement(HeadlessButton, { className: finalClassNames, onClick: props.onClick, type: props.type, disabled: props.disabled, busy: props.busy, busyText: props.busyText, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, onFocus: props.onFocus, onBlur: props.onBlur },
        props?.buttonPrefix && props.buttonPrefix,
        props.children,
        props?.buttonSuffix && props.buttonSuffix));
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
        React.createElement(ReuseMergeExampleButton, { className: tailwindMerge.twMerge("w-32 mt-2", props.loginButtonClasses), onClick: () => {
                setBusy(true);
                setTimeout(() => {
                    handleLogin();
                    setBusy(false);
                }, 2000);
            }, busy: busy }, "Login")));
};

exports.ReuseLoginForm = ReuseLoginForm;
exports.useHeadlessLogin = useHeadlessLogin;
