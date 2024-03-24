import React, { useState } from 'react';
import Cookies from "universal-cookie";
import "./App.css";
import Auth from './component/Auth';
import Chat from './component/Chat';
import SignOut from './component/SignOut';
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Chat />
        <div className='mb-5 pb-5'>
        <SignOut isAuth={isAuth} setIsAuth={setIsAuth} />
        </div>
    </div>
  );
}

export default App;
