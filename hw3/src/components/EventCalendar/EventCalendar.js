import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./EventCalendar.css"; // 匯入自定義樣式

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddEvent = () => {
    if (newEvent.trim() === "") return;
    setEvents((prevEvents) => [
      ...prevEvents,
      { date: date.toDateString(), name: newEvent },
    ]);
    setNewEvent("");
  };

  const getEventsForDate = (date) =>
    events.filter((event) => event.date === date.toDateString());

  return (
    <div className="event-calendar-container">
      <h1>我的活動日曆</h1>
      <Calendar onChange={handleDateChange} value={date} />

      <div className="event-list-container">
        <h3>選定日期：{date.toDateString()}</h3>
        <ul className="event-list">
          {getEventsForDate(date).map((event, index) => (
            <li key={index}>
              {event.name}
              <button
                onClick={() =>
                  setEvents(events.filter((e, i) => i !== index))
                }
                style={{
                  background: "transparent",
                  color: "#dc3545",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                刪除
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-event-container">
        <input
          type="text"
          placeholder="新增活動名稱"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button onClick={handleAddEvent}>新增活動</button>
      </div>
    </div>
  );
};

export default EventCalendar;
