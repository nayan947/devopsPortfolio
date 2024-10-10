import React from "react";
import "./TalkCard.css";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div classname="container">
        <div classname="rectangle">
          <div classname="diagonal-fill"></div>
          <div classname="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" classname="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" classname="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
