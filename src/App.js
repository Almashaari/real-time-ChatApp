import { React, useRef, useState } from 'react';
import Cookies from "universal-cookie";
import Auth from './component/Auth';
import Chat from './component/Chat';
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");
  const roomInputRef = useRef(null);
  if (!isAuth) {
  return (
    <div className="App">
<Auth setIsAuth={setIsAuth} />

    </div>
  );
  }
  return (

   <div>{room ? ( <Chat room={room} />) :(

    <div className="room">
    <label> Type room name: </label>
    <input ref={roomInputRef} />
    <button onClick={() => setRoom(roomInputRef.current.value)}>
      Enter Chat
    </button>
  </div>
   )}

      </div>
  );

}

export default App;
