import "./styles/ProjectTimeline.css";
import ProjectNavbar from "../../components/ProjectNavbar";
import React from "react";

const ProjectTimeline = () => {
  const events = [
    {
      title: "Shooting Stars",
      start: "09:00",
      end: "11:00",
      day: "Monday",
      color: "green",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
      ],
    },
    {
      title: "The Amazing Hubble",
      start: "11:00",
      end: "12:00",
      day: "Tuesday",
      color: "orange",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
      ],
    },
    {
      title: "Choosing A Quality Cookware Set",
      start: "12:00",
      end: "15:00",
      day: "Tuesday",
      color: "purple",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/5.jpg",
        "https://randomuser.me/api/portraits/women/6.jpg",
      ],
    },
    {
      title: "The Amazing Hubble",
      start: "17:00",
      end: "18:00",
      day: "Monday",
      color: "blue",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/7.jpg",
        "https://randomuser.me/api/portraits/women/8.jpg",
      ],
    },
    {
      title: "Choosing A Quality Cookware Set",
      start: "11:00",
      end: "12:00",
      day: "Wednesday",
      color: "orange",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/9.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
      ],
    },
    {
      title: "Astronomy Binoculars: A Great Alternative",
      start: "11:30",
      end: "13:30",
      day: "Friday",
      color: "yellow",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/women/12.jpg",
      ],
    },
    {
      title: "The Universe Through A CMS's Eyes",
      start: "13:00",
      end: "14:00",
      day: "Sunday",
      color: "brown",
      users: 2,
      userAvatars: [
        "https://randomuser.me/api/portraits/men/13.jpg",
        "https://randomuser.me/api/portraits/women/14.jpg",
      ],
    },
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  // Function to check if an event overlaps with a specific time slot
  const isEventInTimeSlot = (event, time) => {
    const [startHour] = event.start.split(":").map(Number);
    const [endHour] = event.end.split(":").map(Number);
    const slotHour = Number(time.split(":")[0]);
    return slotHour >= startHour && slotHour < endHour;
  };

  return (
    <>
      <ProjectNavbar />
      <div className="calendar">
        <div className="calendar-header">
          <button className="today-btn">Today</button>
          <span className="date-range">May 21 - 26, 2045</span>
          <div className="view-switch">
            <button>Year</button>
            <button>Month</button>
            <button className="active">Week</button>
            <button>Day</button>
          </div>
        </div>

        <div className="week-grid">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="day-column">
              <div className="day-header">{day}</div>
              <div className="day-events">
                {timeSlots.map((time, slotIdx) => {
                  const eventsInSlot = events.filter(
                    (event) =>
                      event.day === day && isEventInTimeSlot(event, time)
                  );

                  return (
                    <div
                      key={slotIdx}
                      className={`time-slot ${
                        eventsInSlot.length ? "" : "empty-slot"
                      }`}
                    >
                      {eventsInSlot.length > 0 ? (
                        eventsInSlot.map((event, eventIdx) => (
                          <div
                            key={eventIdx}
                            className={`event-card ${event.color}`}
                          >
                            <span>
                              {event.start} - {event.end}
                            </span>
                            <h3>{event.title}</h3>
                            <div className="event-users">
                              {event.userAvatars.map((avatar, i) => (
                                <img
                                  key={i}
                                  src={avatar}
                                  alt="User Avatar"
                                  className="user-avatar"
                                />
                              ))}
                            </div>
                            <div className="event-custom-text">
                              Custom text here
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="empty-slot">{time}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectTimeline;
