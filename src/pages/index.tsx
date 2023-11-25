import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import { CalendarTile } from "@components/CalendarTile";
import { Event } from "@components/Event";

export default function Home() {
  const [event, setEvent] = useState({});

  const showEvent = (event: any) => {
    console.log(event);
    setEvent(event);
  };

  return (
    <div className="home-container">
      <div className="calendar-container">
        <Calendar
          locale="fi-FI"
          tileContent={({ date }) => CalendarTile(date, showEvent)}
        />
      </div>
      <div className="event-container">
        <Event {...event} />
      </div>
    </div>
  );
}
