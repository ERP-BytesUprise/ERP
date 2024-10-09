import React, { useState } from "react";
import "./styles/ProjectUpdates.css"; // For the custom styles
import { useRef } from "react";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UpdatesFiles from "../../components/UpdatesFiles";
// Importing images from the src folder
import addFileIcon from "../../assets/icons/add-file-icon.png";
import emojiIcon from "../../assets/icons/emoji-icon.png";
import mentionIcon from "../../assets/icons/mention-icon.png";
import userAvatar from "../../assets/icons/user-avatar.png";
import clockIcon from "../../assets/icons/clock-icon.png";
import dotsIcon from "../../assets/icons/dots-icon.png";
import likeIcon from "../../assets/icons/like-icon.png";
import replyIcon from "../../assets/icons/reply-icon.png";

const Updates = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(""); // Rich text editor value
  const boxRef = useRef(null); // Reference to the UpdateBox component
  const quillRef = useRef(null); // Reference to ReactQuill component

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!value.trim()) {
      setIsExpanded(false); // Collapse if no text is entered
    }
  };

  const handleClickOutside = (event) => {
    // Collapse when clicking outside the box
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the box
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isExpanded && quillRef.current) {
      // Focus the ReactQuill editor when the update box is expanded
      quillRef.current.getEditor().focus();
    }
  }, [isExpanded]);

  const [expandedReply, setExpandedReply] = useState(null); // To track which reply section is expanded

  const handleReplyClick = (id) => {
    setExpandedReply(expandedReply === id ? null : id); // Toggle reply section expansion
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote", "align"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };
  const updates = [
    {
      id: 1,
      user: "Jay Vasani",
      time: "2h",
      link: "https://www.figma.com/design/3kPgQAYhIhEZ1U6ib6cw4j/ERP-(Enterprise-Resource-Management)?m=auto&t=JpsSUJa7KQRXtSFP-1",
    },
    {
      id: 2,
      user: "Jay Vasani",
      time: "2h",
      link: "https://www.figma.com/design/3kPgQAYhIhEZ1U6ib6cw4j/ERP-(Enterprise-Resource-Management)?m=auto&t=JpsSUJa7KQRXtSFP-1",
    },
    {
      id: 3,
      user: "Jay Vasani",
      time: "2h",
      link: "https://www.figma.com/design/3kPgQAYhIhEZ1U6ib6cw4j/ERP-(Enterprise-Resource-Management)?m=auto&t=JpsSUJa7KQRXtSFP-1",
    },
  ];

  return (
    <>
      <div className="WithNav">
        <UpdatesFiles />
        <div className="updates-containers">
          {/* Tabs for Updates and Files */}
          <div
            className={`update-box ${isExpanded ? "expanded" : ""}`}
            ref={boxRef}
          >
            {isExpanded ? (
              <div>
                <ReactQuill
                  ref={quillRef}
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  placeholder="Write an update..."
                  onBlur={handleBlur} // Collapse when no text entered
                />
                <button>Update</button>
              </div>
            ) : (
              <div
                className="collapsed-text"
                onClick={handleFocus}
                placeholder="Write an update..."
                dangerouslySetInnerHTML={{ __html: value }} // Render formatted text
              />
            )}
          </div>
          <div className="content">
            {updates.map((update) => (
              <div key={update.id} className="update">
                <div className="update-header">
                  <div className="user-info">
                    <img
                      src={userAvatar}
                      alt="User Avatar"
                      className="Updateavatar"
                    />
                    <span>{update.user}</span>
                  </div>
                  <div className="update-meta">
                    <img src={clockIcon} alt="Clock Icon" className="icon" />
                    <span>{update.time}</span>
                    <img
                      src={dotsIcon}
                      alt="Options"
                      className="icon options"
                    />
                  </div>
                </div>
                <div className="update-content">
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {update.link}
                  </a>
                  <div className="update-actions">
                    <button className="like-button">
                      <img src={likeIcon} alt="Like" />
                      Like
                    </button>
                    <button
                      className="reply-button"
                      onClick={() => handleReplyClick(update.id)}
                    >
                      <img src={replyIcon} alt="Reply" />
                      Reply
                    </button>
                  </div>
                  {expandedReply === update.id && (
                    <div className="reply-section">
                      <textarea
                        className="reply-textarea"
                        placeholder="Write a reply..."
                      ></textarea>
                      <div className="formatting-options">
                        <button className="add-file">
                          <img src={addFileIcon} alt="Add File" />
                          Add File
                        </button>
                        <button className="emoji">
                          <img src={emojiIcon} alt="Emoji" />
                          Emoji
                        </button>
                        <button className="mention">
                          <img src={mentionIcon} alt="Mention" />
                          Mention
                        </button>
                        <button className="submit-reply">Reply</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
