import React from "react";
export interface HeadlessLoginFormProps {
    loginAPI?: string;
}
declare const useHeadlessLogin: (props: HeadlessLoginFormProps) => {
    email: string | undefined;
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    password: string | undefined;
    setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
    handleLogin: () => boolean;
};
export default useHeadlessLogin;
