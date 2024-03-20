import SendIcon from '@mui/icons-material/Send';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages); // Optional for debugging
      setMessages(messages);
    });

    return unsubscribe;
  }, [messagesRef]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
    });

    setNewMessage("");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center font-sans mx-auto m-auto border border-2 border-black rounded-1" >
      <div className="bg-dark text-white text-center fw-light w-100">
        <h1>SPEECH</h1>
      </div>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
            key={message.id}
            className={`message-container d-flex flex-column mb-2 rounded-lg ${
              message.user === auth.currentUser?.displayName ? "bg-primary text-white" : "bg-light text-dark"
            }`}
          >
              {message.user === auth.currentUser?.displayName && (
                <div className="user-message">
                  <span className="user me-2">{message.user}:</span> {message.text}
                </div>
              )}
              {message.user !== auth.currentUser?.displayName && (
                <div className="other-message">
                  <span className="user me-2">{message.user}:</span> {message.text}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No messages yet...</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
      <div class="input-group">
      <input type="text" class="form-control" id="new-message" placeholder="Type your message here..." aria-label="Message" />
        <button type="submit" className=" btn btn-primary rounded-end">
          <SendIcon />
        </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
