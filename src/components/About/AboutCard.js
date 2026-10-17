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
            from <span className="purple">Dindigul, Tamil Nadu</span>.
            <br />
            Currently working as a <span className="purple">QA Engineer</span> at <span className="purple">Talview</span>, focusing on web applications, GraphQL APIs, and end-to-end user workflows.
            <br />
            I completed my <span className="purple">B.Sc. in Computer Science</span> at Sathyabama Institute of Science and Technology, Chennai.
            <br />
            <br />
            My approach to quality assurance is rooted in ownership, structured investigation, and clear communication. I focus on documenting reusable test scenarios, maintaining traceability between requirements and test cases, and sharing findings that help teams prevent issues before they reach production.
            <br />
            <br />
            Apart from testing and exploratory coding, some other activities that I love:
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
            "Testing beyond the happy path to build software people can trust."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
