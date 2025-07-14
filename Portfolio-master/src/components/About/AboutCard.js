import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muthu Krishnan </span>
            from <span className="purple"> Dindigul, Tamil Nadu.</span>
            <br />
            A Python developer who loves turning logic into living, breathing code.
            <br />
            I have completed Bsc Computer Science at Sathyabama Institute of Science and Technology
            Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fuelled by curiosity, running on pure code."{" "}
          </p>
    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
