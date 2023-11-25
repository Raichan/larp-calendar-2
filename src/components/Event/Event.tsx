import React from "react";

/* TODO use the full interface from the old calendar
  interface Props {
  id: number;
  name: string;
  eventType: string;
  startDate: string;
  endDate: string;
  dateTextField: string;
  startSignupTime: string;
  endSignupTime: string;
  locationDropDown: string;
  locationTextField: string;
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
  organizerName: string;
  organizerEmail: string;
  links: string[];
  status: string;
}*/

interface Props {
  name?: string;
  date?: string;
}

export const Event = (event: Props) => {
  return (
    <div>
      {event.name ? (
        <div>
          <h2>{event.name}</h2>
          {event.date && <div>{new Date(event.date).toDateString()}</div>}
        </div>
      ) : (
        <div>Valitse tapahtuma klikkaamalla tapahtuman nimeä</div>
      )}
    </div>
  );
};
