'use strict';

var React = require('react');

// export interface HeadlessLoginReturnProps {
//   email: string;
//   setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
//   password: string;
//   setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
//   handleLogin: () => boolean;
// }
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
    return React.createElement("div", null);
};

exports.ReuseLoginForm = ReuseLoginForm;
exports.useHeadlessLogin = useHeadlessLogin;
