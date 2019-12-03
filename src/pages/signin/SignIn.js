import React from "react";
import "./SignIn.scss";
import Signin from "../../components/siginin/Signin";
import Signup from "../../components/signup/Signup";

const SigninAndSignout = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninAndSignout;
