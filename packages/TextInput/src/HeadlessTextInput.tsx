import React, { useEffect, useRef, RefObject } from "react";

export interface HeadlessTextInputProps {
  variant?: string; //Not Used Yet
  type?: string;
  name?: string;
  role?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  wrapperClassName?: string;
  className?: string;
  autoComplete?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  ariaDescribedby?: string;
  htmlFor?: string;
  placeholder?: string;
  textInputSuffix?: React.ReactNode;
  textInputPrefix?: React.ReactNode;
  textInputBottom?: React.ReactNode;
  error?: React.ReactNode;
  label?: React.ReactNode;
  onChange: (value?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value?: React.FocusEvent<HTMLInputElement, Element>) => void;
  onFocus?: (value?: React.FocusEvent<HTMLInputElement, Element>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
  min?: string;
  forceFocus?: string;
}

type InputRef = RefObject<HTMLInputElement>;

const HeadlessTextInput: React.FC<HeadlessTextInputProps> = (props) => {
  const textInputRef: InputRef = useRef(null);

  useEffect(() => {
    if (
      props.forceFocus &&
      textInputRef.current &&
      textInputRef.current.focus
    ) {
      textInputRef.current.focus();
    }
  }, [props.forceFocus]);

  return (
    <>
      {props?.label && props.label}
      <div className={props.wrapperClassName}>
        {props?.textInputPrefix && props.textInputPrefix}
        <input
          autoComplete={props.autoComplete}
          inputMode={props.inputMode}
          role={props.role}
          id={props.id}
          value={props.value}
          ref={textInputRef}
          type={props.type}
          name={props.name}
          className={props.className}
          placeholder={props.placeholder}
          aria-describedby={props.ariaDescribedby}
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.onChange}
          onBlur={(e) => {
            if (props.onBlur) {
              props.onBlur(e);
            }
          }}
          onFocus={(e) => {
            if (props.onFocus) {
              props.onFocus(e);
            }
          }}
          onKeyDown={(e) => {
            props.onKeyDown?.(e);
          }}
          onWheel={(e) => {
            props.onWheel?.(e);
          }}
          min={props?.min ? props.min : ""}
        />
        {props?.textInputSuffix && props.textInputSuffix}
      </div>
      {props?.error && props.error}
    </>
  );
};

export default HeadlessTextInput;
