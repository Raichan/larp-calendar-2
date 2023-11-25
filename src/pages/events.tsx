import { Event } from "@components/Event";
import db from "@assets/testdb.json";
import { DbEvent } from "@customTypes/Event";

export default function Events() {
  const events: DbEvent[] = db.events;

  return (
    <div>
      <h2>Tapahtumalista</h2>
      {events.map((e, i) => (
        <Event {...e} key={"event-" + i} />
      ))}
    </div>
  );
}
