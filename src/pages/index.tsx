import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import { CalendarTile } from "@/components/CalendarTile";

export default function Home() {
  return (
    <div className="home-container">
      <div className="calendar-container">
        <Calendar
          locale="fi-FI"
          tileContent={({ date }) => CalendarTile(date)}
        />
      </div>
      <div className="event-container">Event info here</div>
    </div>
  );
}
