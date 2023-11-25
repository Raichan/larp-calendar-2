import db from "@assets/testdb.json";
import { isSameDay } from "date-fns";
import { DbEvent } from "@customTypes/Event";

export const CalendarTile = (date: Date, onclick: (...args: any[]) => any) => {
  const events: DbEvent[] = db.events;
  const eventsToday: DbEvent[] = events.filter((e) => {
    return isSameDay(new Date(e.date), date);
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
          key={event.name}
        >
          {event.name}
        </a>
      ))}
    </div>
  );
};
