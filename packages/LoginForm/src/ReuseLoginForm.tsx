import React, { useState } from "react";
import useHeadlessLogin from "./useHeadlessLogin";
import { ReuseButton } from "@shared-test/reusejsv2-sample-button";
import {
  ReuseTextInput,
  ReusePasswordInput,
} from "@shared-test/reusejsv2-sample-text-input";
import { twMerge } from "tailwind-merge";

export interface ReuseLoginFormProps {
  wrapperClasses?: string;
  emailInputClasses?: string;
  passwordInputClasses?: string;
  loginButtonClasses?: string;
}

const ReuseLoginForm: React.FC<ReuseLoginFormProps> = (props) => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useHeadlessLogin({ loginAPI: "sample" });
  const [busy, setBusy] = useState(false);

  return (
    <div
      className={twMerge(
        "w-1/3 flex flex-col items-center mx-auto ",
        props.wrapperClasses
      )}
    >
      <ReuseTextInput
        className={twMerge("px-2", props.emailInputClasses)}
        placeholder="Email"
        value={email}
        onChange={(value) => {
          setEmail(value);
        }}
        error={email === "" && "Please Enter an Email Address"}
      />
      <ReusePasswordInput
        className={twMerge("px-2", props.passwordInputClasses)}
        placeholder="Password"
        value={password}
        onChange={(value) => {
          setPassword(value);
        }}
      />
      <ReuseButton
        className={twMerge("w-32 mt-2", props.loginButtonClasses)}
        onClick={() => {
          setBusy(true);
          setTimeout(() => {
            handleLogin();
            setBusy(false);
          }, 2000);
        }}
        busy={busy}
      >
        Login
      </ReuseButton>
    </div>
  );
};

export default ReuseLoginForm;
