import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaChessKnight, FaSnowboarding } from "react-icons/fa";
import { GiJourney } from "react-icons/gi"
import { RiParentFill } from "react-icons/ri"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Yoav Danieli </span>
            <br />I am a computer scientist graduate from Technion - Israel Institute of Technology. I have been developing web applications and software services for over four years.
            <br />
            <br />
            Aside from coding, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <FaChessKnight /> Playing board games
            </li>
            <li className="about-activity">
              <FaSnowboarding /> Snowboarding
            </li>
            <li className="about-activity">
              <GiJourney /> Travelling
            </li>
            <li className="about-activity">
              <RiParentFill /> Parenting
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
