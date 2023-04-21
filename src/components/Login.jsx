import React from "react";
import "./Login.css";
import fblogo from "../images/fblogo.svg";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";
function Login() {
  const [state, dispatch] = useStateValue();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={fblogo} alt="" />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signInWithGoogle}>
        SIGN IN
      </Button>
    </div>
  );
}

export default Login;
