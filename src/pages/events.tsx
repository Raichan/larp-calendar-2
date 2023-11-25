import { useState } from "react";
import { Event } from "@components/Event";
import db from "@assets/testdb.json";
import { DbEvent } from "@customTypes/Event";

export default function Events() {
  const events: DbEvent[] = db.events as DbEvent[];
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFilteredEvents(
      events.filter(
        (e) =>
          e.eventName?.includes(event.target.value) ||
          e.storyDescription?.includes(event.target.value) ||
          e.infoDescription?.includes(event.target.value)
      )
    );
  };

  return (
    <div>
      <h2>Tapahtumalista</h2>
      <div>Tapahtumia: {filteredEvents.length}</div>
      <div>
        <label>Vapaa haku </label>
        <input onChange={handleChange} />
      </div>

      {filteredEvents.map((e, i) => (
        <Event {...e} key={"event-" + i} />
      ))}
    </div>
  );
}
