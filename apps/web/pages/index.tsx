import React, { useState } from "react";
// import {
//   HeadlessButton,
//   ReuseButton,
//   ReuseTextInput,
//   HeadlessTextInput,
//   HeadlessLoginForm,
// } from "components";
// import ReusePasswordInput from "../../../packages/TextInput/src/ReusePasswordInput";
import {
  HeadlessButton,
  ReuseButton,
} from "@shared-test/reusejsv2-sample-button";
import {
  ReuseTextInput,
  ReusePasswordInput,
} from "@shared-test/reusejsv2-sample-text-input";
import { useHeadlessLogin } from "@shared-test/reusejsv2-sample-login-form";
import { ReuseButtonGroup } from "@shared-test/reusejsv2-sample-button-group";

export default function Web() {
  const [busy, setBusy] = useState(false);

  const { email, setEmail, password, setPassword, handleLogin } =
    useHeadlessLogin({ loginAPI: "sample" });

  return (
    <div className="">
      <h1 className="text-3xl">Web</h1>

      <div className="w-1/3 flex flex-col items-center mx-auto ">
        <ReuseTextInput
          className="px-2"
          placeholder="Email"
          value={email}
          onChange={(value) => {
            setEmail(value);
          }}
          error={email === "" && "Please Enter an Email Address"}
        />
        <ReusePasswordInput
          className="px-2"
          placeholder="Password"
          value={password}
          onChange={(value) => {
            setPassword(value);
          }}
        />
        <ReuseButton
          className="mt-2"
          onClick={() => {
            setBusy(true);
            setTimeout(() => {
              handleLogin();
              setBusy(false);
            }, 3000);
          }}
          busy={busy}
        >
          Reuse Test Button
        </ReuseButton>
      </div>
      <div className="w-full flex justify-center">
        {/* <HeadlessLoginForm wrapperClasses="" /> */}
        {/* <ReuseTextInput /> */}
        <ReuseButtonGroup>
          <ReuseButton
            key={1}
            className="mt-2 bg-yellow-400 active:bg-gray-400"
            onClick={() => {}}
          >
            Button ONE
          </ReuseButton>
          <ReuseButton
            key={2}
            className="mt-2 bg-red-400 disabled:bg-gray-400"
            onClick={() => {}}
          >
            Button TWO
          </ReuseButton>
          <ReuseButton
            key={3}
            className="mt-2 bg-indigo-500 disabled:bg-gray-400"
            onClick={() => {}}
          >
            Button THREE
          </ReuseButton>
        </ReuseButtonGroup>
      </div>
    </div>
  );
}
