import React from "react";
import { format } from "date-fns";
import "./event.css";

/* TODO use the full interface from the old calendar
  interface Props {
  id: number;
  eventName: string;
  eventType: string;
  startDate: string;
  endDate: string;
  dateTextField: string;
  signupStart: string;
  signupStart: string;
  locationArea: string;
  locationName: string;
  iconUrl: string;
  genre: string;
  cost: string;
  ageLimit: string;
  beginnerFriendly: boolean;
  eventFull: boolean;
  invitationOnly: boolean;
  languageFree: boolean;
  storyDescription: string;
  infoDescription: string;
  links: string[];
  status: string;
}*/

interface Props {
  eventName?: string;
  eventType?: string;
  startDate?: string;
  endDate?: string;
  signupStart?: string;
  signupEnd?: string;
  locationArea?: string;
  locationName?: string;
  iconUrl?: string;
  genre?: string[];
  cost?: string;
  ageLimit?: string;
  beginnerFriendly?: boolean;
  eventFull?: boolean;
  invitationOnly?: boolean;
  languageFree?: boolean;
  storyDescription?: string;
  infoDescription?: string;
  links?: string[];
}

export const Event = (event: Props) => {
  const formatDate = (date: string) => {
    return format(new Date(date), "d.M.y");
  };

  return (
    <div>
      {event.eventName ? (
        <div>
          <h2>{event.eventName}</h2>
          {event.startDate && (
            <div className="dates">
              <span>{formatDate(event.startDate)}</span>{" "}
              {event.endDate && (
                <>
                  {" "}
                  - <span>{formatDate(event.endDate)}</span>
                </>
              )}{" "}
              {event.locationName && <span>{event.locationName}</span>}
            </div>
          )}
          {(event.signupStart ||
            event.genre ||
            event.cost ||
            event.ageLimit) && (
            <p>
              {event.signupStart && event.signupEnd && (
                <>
                  <span>
                    Ilmoittautuminen: {formatDate(event.signupStart)} -{" "}
                    {formatDate(event.signupEnd)}
                  </span>
                  <br />
                </>
              )}
              {event.genre && (
                <>
                  <span>{event.genre.join(", ")}</span>
                  <br />
                </>
              )}
              {event.cost && (
                <>
                  <span>Osallistumismaksu: {event.cost}€</span>
                  <br />
                </>
              )}
              {event.ageLimit && (
                <>
                  <span>Ikäraja: {event.ageLimit}</span>
                  <br />
                </>
              )}
            </p>
          )}
          {event.storyDescription && (
            <p>
              <i>{event.storyDescription}</i>
            </p>
          )}
          {event.infoDescription && <p>{event.infoDescription}</p>}
          {event.links && (
            <ul>
              {event.links.map((l, i) => (
                <li key={"link-" + i}>
                  <a href={l}>{l}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>Valitse tapahtuma klikkaamalla tapahtuman nimeä</div>
      )}
    </div>
  );
};
