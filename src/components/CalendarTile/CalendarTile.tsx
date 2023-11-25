import db from "@assets/testdb.json";
import { isSameDay } from "date-fns";
import { DbEvent } from "@customTypes/Event";

export const CalendarTile = (date: Date, onclick: (...args: any[]) => any) => {
  const events: DbEvent[] = db.events as DbEvent[];
  const eventsToday: DbEvent[] = events.filter((e) => {
    return e.startDate && isSameDay(new Date(e.startDate), date);
  });
  return (
    <div>
      {eventsToday.map((event) => (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onclick(event);
          }}
          key={event.eventName}
        >
          {event.eventName}
        </a>
      ))}
    </div>
  );
};
