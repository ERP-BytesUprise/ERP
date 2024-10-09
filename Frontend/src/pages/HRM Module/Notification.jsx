import React, { useState } from "react";
import "./styles/Notification.css";
import Alarm from "../../assets/icons/Alarm.png";

const NotificationDashboard = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 2,
      name: "Aditya Rathod",
      role: "Developer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 3,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
    {
      id: 4,
      name: "Aditya Rathod",
      role: "Developer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
    {
      id: 5,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 6,
      name: "Aditya Rathod",
      role: "IT Support",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
    {
      id: 7,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 8,
      name: "Aditya Rathod",
      role: "Developer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 9,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
    {
      id: 10,
      name: "Aditya Rathod",
      role: "Developer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
    {
      id: 11,
      name: "Jay Vasani",
      role: "Designer",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: false,
    },
    {
      id: 12,
      name: "Aditya Rathod",
      role: "IT Support",
      message:
        "Concurrent conversations: I can handle multiple conversations simultaneously...",
      isRead: true,
    },
  ]);

  const [allRead, setAllRead] = useState(false); // State for the switch button

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    setNotifications(updatedNotifications);
    setAllRead(true);
  };

  const handleSwitchChange = () => {
    setAllRead(!allRead);
    if (!allRead) {
      markAllAsRead();
    } else {
      // Logic for marking notifications as unread can be added here
    }
  };

  return (
    <div className="dashboard-Notification">
      <div className="Notificationheader">
        <div className="Notificationcontent">
          <div className="bell-icon">
            <img src={Alarm} alt="bell" /> {/* Bell icon */}
          </div>
          <div className="Notification-text">
            <p className="NotificationPushHeader">Push Notification</p>{" "}
            <p className="mark-all-button" onClick={markAllAsRead}>
              Mark all as read
            </p>
          </div>
        </div>
        <div className="slider-cont">
          <label className="switch">
            <input
              type="checkbox"
              checked={allRead}
              onChange={handleSwitchChange}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="Notificationuser-info">
              <div className="Notificationuser-avatar">
                <img
                  src={`https://i.pravatar.cc/150?img=${notification.id}`}
                  alt={notification.name}
                />
              </div>
              <div className="Notificationuser-details">
                <h4>{notification.name}</h4>
                <p className="rolee">{notification.role}</p>
              </div>
              <p className="message">{notification.message}</p>{" "}
              {/* Message aligned beside name and role */}
            </div>
            <div
              className={`dot ${notification.isRead ? "gray" : "blue"}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDashboard;
