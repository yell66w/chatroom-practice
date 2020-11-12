import React, { useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import ChatPill from "../components/ChatPill";
import MessageBox from "../components/MessageBox";
import io from "socket.io-client";

const ChatContainer = () => {
  const [socId, setSocId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000/", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    socketRef.current.on("socID", async (id) => {
      setSocId(id);
    });
    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);

  const receivedMessage = (message) => {
    setMessages((oldMessage) => [...oldMessage, message]);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    const messageObj = {
      body: message,
      id: socId,
    };

    setMessage("");
    socketRef.current.emit("send message", messageObj);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col w-4/6 overflow-y-auto">
      <Scrollbars style={{ width: "100%" }}>
        <div className="flex flex-col mb-5 px-2">
          {messages.map((message, index) => {
            if (message.id === socId) {
              return (
                <ChatPill
                  key={message.id}
                  owner={true}
                  message={message.body}
                />
              );
            } else
              return (
                <ChatPill
                  key={message.id}
                  owner={false}
                  message={message.body}
                />
              );
          })}
        </div>
      </Scrollbars>
      <MessageBox
        message={message}
        handleChange={handleChange}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default ChatContainer;
