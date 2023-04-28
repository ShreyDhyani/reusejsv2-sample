'use strict';

var React = require('react');
var tailwindMerge = require('tailwind-merge');

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

exports.HeadlessButton = HeadlessButton;
exports.ReuseButton = ReuseMergeExampleButton;
