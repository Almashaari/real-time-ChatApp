import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase-config";
function Chat(props) {
  const {room} = props;
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,

      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
