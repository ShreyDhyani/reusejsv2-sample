'use strict';

var React = require('react');
var tailwindMerge = require('tailwind-merge');

const HeadlessTextInput = (props) => {
    const textInputRef = React.useRef(null);
    React.useEffect(() => {
        if (props.forceFocus &&
            textInputRef.current &&
            textInputRef.current.focus) {
            textInputRef.current.focus();
        }
    }, [props.forceFocus]);
    return (React.createElement(React.Fragment, null,
        props?.label && props.label,
        React.createElement("div", { className: props.wrapperClassName },
            props?.textInputPrefix && props.textInputPrefix,
            React.createElement("input", { autoComplete: props.autoComplete, inputMode: props.inputMode, role: props.role, id: props.id, value: props.value, ref: textInputRef, type: props.type, name: props.name, className: props.className, placeholder: props.placeholder, "aria-describedby": props.ariaDescribedby, disabled: props.disabled, checked: props.checked, onChange: props.onChange, onBlur: (e) => {
                    if (props.onBlur) {
                        props.onBlur(e);
                    }
                }, onFocus: (e) => {
                    if (props.onFocus) {
                        props.onFocus(e);
                    }
                }, onKeyDown: (e) => {
                    props.onKeyDown?.(e);
                }, onWheel: (e) => {
                    props.onWheel?.(e);
                }, min: props?.min ? props.min : "" }),
            props?.textInputSuffix && props.textInputSuffix),
        props?.error && props.error));
};

const ReuseTextInput = (props) => {
    // mt-1 px-4 bg-white dark:bg-gray-900 block w-full rounded-md border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:ring-gray-500 focus-visible:border-red-400 font-normal sm:text-sm text-gray-900 dark:text-white
    const finalInputClassName = tailwindMerge.twMerge("bg-white w-full mt-1 rounded-md border-black border rounded-md px-2 py-1", props.className);
    const finalWrapperClassName = tailwindMerge.twMerge("w-full", props.wrapperClassName);
    return (React.createElement(HeadlessTextInput, { ...props, wrapperClassName: finalWrapperClassName, className: finalInputClassName, onChange: (e) => {
            props.onChange(e?.target.value);
        }, onBlur: (e) => {
            props.onBlur && props.onBlur(e?.target.value);
        }, onFocus: (e) => {
            props.onFocus && props.onFocus(e?.target.value);
        } }));
};

const ReusePasswordInput = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const suffixClassNames = "text-gray-300 hover:text-gray-600 cursor-pointer";
    // console.log("Props>>", props);
    // console.log(props.suffixPositionClasses);
    // console.log(twMerge("absolute top-2 right-2", props.suffixPositionClasses));
    const passwordButton = (React.createElement("button", { className: tailwindMerge.twMerge("absolute top-2 right-2", props.suffixPositionClasses), onClick: () => {
            setShowPassword(!showPassword);
        } }, showPassword ? (props.hideComponent ? (props.hideComponent) : (React.createElement("label", { className: suffixClassNames }, "Hide"))) : props.showComponent ? (props.showComponent) : (React.createElement("label", { className: suffixClassNames }, "Show"))));
    return (React.createElement(ReuseTextInput, { ...props, className: props.className, onChange: props.onChange, wrapperClassName: "relative", textInputSuffix: passwordButton, type: showPassword ? "text" : "password" }));
};

exports.HeadlessTextInput = HeadlessTextInput;
exports.ReusePasswordInput = ReusePasswordInput;
exports.ReuseTextInput = ReuseTextInput;
