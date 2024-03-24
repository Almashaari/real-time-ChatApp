import { signOut } from "firebase/auth";
import React from 'react';
import Cookies from "universal-cookie";
import { auth } from "../firebase-config.js";
const cookies = new Cookies();

function SignOut({ children, isAuth, setIsAuth }) {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };
  return (
    <div className="app-container">
      {isAuth && (
          <button class="btn btn-primary" onClick={signUserOut}>Sign Out</button>
      )}
      {children}
    </div>
  );
};

export default SignOut;
