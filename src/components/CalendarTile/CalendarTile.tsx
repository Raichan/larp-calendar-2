import db from "../../assets/testdb.json";
import { isSameDay } from "date-fns";

type Event = {
  name: string;
  date: string;
};

export const CalendarTile = (date: Date) => {
  const events: Event[] = db.events;
  const eventsToday: Event[] = events.filter((e) => {
    return isSameDay(new Date(e.date), date);
  });
  return <div>{eventsToday.map((e) => e.name)}</div>;
};
