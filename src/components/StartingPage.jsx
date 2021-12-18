import React from "react";
import "./StartingPage.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
function StartingPage({socket}) {
  const history = useNavigate();
    const id = useRef();
    const userName = useRef();
  return (
    <div id="starting-page-parent">
      <div id="card">
        <label htmlFor="friend-id">
          Enter the name of the room you want to join
        </label>
        <input
          type="text"
          name="friend-id"
          ref={id}
          placeholder="Enter the name of the room.."
          required
        />
        <br />
        <label htmlFor="friend-id">
          Enter your Username
        </label>
        <input
          type="text"
          name="user-name"
          ref={userName}
          placeholder="Enter Your Username..."
          required
        />
        <br />
        <button
          id="go-to-chat"
          onClick={() => {
            if (id.current.value.length != 0) {
              socket.emit("join_room", id.current.value);
              history(`/chat/${id.current.value}/${userName.current.value}`);
            }
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default StartingPage;
