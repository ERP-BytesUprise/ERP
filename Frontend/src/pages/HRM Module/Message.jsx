import React, { useState } from "react";
import { FaCheck, FaCheckDouble, FaThumbtack } from "react-icons/fa";
import "./styles/Message.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ChatComponent() {
  const [messages, setMessages] = useState([
    {
      sender: "Jay Vasani",
      text: "Good Morning Ma'am",
      time: "10:07 AM",
      type: "received",
    },
    {
      sender: "Me",
      text: "Good Morning, I will need those reports by 3 PM",
      time: "10:07 AM",
      type: "sent",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        {
          sender: "Me",
          text: inputMessage,
          time: new Date().toLocaleTimeString(),
          type: "sent",
        },
      ]);
      setInputMessage("");
    }
  };

  return (
    <div className="chat-wrapper">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="group-chats">
          <div className="chat-title">Group Chats</div>
          <div className="chat-item">
            <div>
              <h3>HR Announcement</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>

            {/* <span>HR Announcement</span> */}

            <span className="time">10:07 AM</span>
            <FaCheckDouble className="read-icon" />
          </div>
          <div className="chat-item">
            <div>
              <h3>Design Team</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Design Team</span> */}
            <span className="time">10:07 AM</span>
            <FaCheckDouble className="read-icon" />
          </div>
          <div className="chat-item">
            <div>
              <h3>Dev Team</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Dev Team</span> */}
            <span className="time">10:07 AM</span>
            <FaCheckDouble className="read-icon" />
          </div>
        </div>

        <div className="pinned-messages">
          <div className="pinned-title">
            {" "}
            <FaThumbtack className="pin-icon" />
            Pinned Messages
          </div>
          <div className="pinned-item">
            <div>
              <h3>Jay Vasani</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Dev Team</span> */}
            <span className="time">10:07 AM</span>
            <FaCheckDouble className="read-icon" />
            {/* <FaThumbtack className="pin-icon" /> Jay Vasani: Good Morning Ma'am */}
          </div>
          <div className="pinned-item">
            <div>
              <h3>Tanaya</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Dev Team</span> */}
            <span className="time">10:07 AM</span>
            <FaCheckDouble className="read-icon" />
            {/* <FaThumbtack className="pin-icon" /> Tanaya: I hope you... */}
          </div>
          <div className="pinned-item">
            <div>
              <h3>Pratik</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Dev Team</span> */}
            <span className="time">10:07 AM</span>
            <FaCheck className="unread-icon" />
            {/* <FaThumbtack className="pin-icon" /> Tanaya: I hope you... */}
          </div>
        </div>
        <div className="all-messages">
          <div className="messages-title">All Messages</div>
          <div className="chat-item">
            <div>
              <h3>Aman Singh</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            <span className="time">10:07 AM</span>
            <FaCheck className="unread-icon" />
          </div>
          <div className="chat-item">
            <div>
              <h3>Renuka Ch</h3>
              <messages>i hope this massage find you well Due to... </messages>
            </div>
            {/* <span>Renuka Choudhry</span> */}
            <span className="time">10:07 AM</span>
            <FaCheck className="unread-icon" />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="profile-info">
            <img src="avatar.jpg" alt="Jay Vasani" className="Messageavatar" />
            <div>
              <h4>Jay Vasani</h4>
              <span className="Avatarstatus">Available</span>
            </div>
          </div>

          {/* Navbar with icons */}
          <div className="icon-navbar">
            <span>{"\u{1F516}"}</span> {/* Bookmark icon */}
            <span>{"\u{1F4CC}"}</span> {/* Pin icon */}
            <span>{"\u{205D}"}</span> {/* Vertical ellipsis */}
          </div>
        </div>

        <div className="chat-body">
          {messages.map((message, index) => (
            <div key={index} className={`chat-bubble ${message.type}`}>
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.time}{" "}
                {message.type === "sent" && (
                  <FaCheckDouble className="read-icon" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <button className="icon-button">
            <i className="fas fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type your message here ..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="icon-button">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="icon-button mic-button">
            <i className="fas fa-microphone"></i>
          </button>
          <button className="send-button" onClick={sendMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
