import React from "react";
import "./ChattingPage.scss";
import Socket from "./Socket";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import SocketIOClient from "socket.io-client";
import { useParams } from "react-router-dom";
function ChattingPage({ data, setData, socket }) {
  useEffect(() => {
    socket.on("disconnect", (user) => {
      alert(user + " left the chat");
    });
  }, []);
  const messageRef = useRef();
  const [userMessages, addUserMessages] = useState([]);
  const { room_name,userName } = useParams();
//   console.log(friend_id);
    function sendMessage ()
    {
        const messageObj = {
            text: messageRef.current.value,
            written: "user",
            room: room_name,
            userName:userName
        }
      setData((prev) => [
        ...prev,
        messageObj,
      ] );
        socket.emit("message", messageObj)
        messageRef.current.value = '';
  }
  return (
    <div>
      <div id="top-div">

          </div>
      {data.map((messages) => {
        let messageStyle = {
          textAlign: messages.written == "user" ? "right" : "left",
          padding: "5px",
        };
        return (
          <div style={messageStyle}>
            <p
              className="message"
              style={
                messages.written == "user"
                  ? { marginLeft: "auto", borderBottomRightRadius: "0" }
                  : { marginRight: "auto", borderBottomLeftRadius: "0" }
              }
            >
                    { messages.text }
                    <br />
                    <h6 style={ {
                        margin:'0'
                    }}>{ messages.writer}</h6>
            </p>
          </div>
        );
      })}
      <div id="message-div">
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          ref={messageRef}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChattingPage;
