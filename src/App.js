import { React, useState } from 'react';
import Cookies from "universal-cookie";
import "./App.css";
import Auth from './component/Auth';
import Chat from './component/Chat';
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
    <div className="App">
      <Chat />
    </div>
  );

}

export default App;
