import React from "react";
import Link from "next/link";
import "./header.css";

interface Props {
  id: number;
  eventName: string;
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
}

export const Event = ({ id, eventName, eventType }: Props) => {
  return (
    <div>
      <h2></h2>
    </div>
  );
};
