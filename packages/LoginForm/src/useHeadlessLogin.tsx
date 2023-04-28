import React, { useState } from "react";

export interface HeadlessLoginFormProps {
  loginAPI: string;
}

// export interface HeadlessLoginReturnProps {
//   email: string;
//   setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
//   password: string;
//   setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
//   handleLogin: () => boolean;
// }

const useHeadlessLogin = (props: HeadlessLoginFormProps) => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

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

export default useHeadlessLogin;
