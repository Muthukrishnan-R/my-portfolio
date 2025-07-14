import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAnaconda,
  SiWindowsterminal,
  SiPycharm,
  SiNotepadplusplus
  
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
      </Col>
    </Row>
  );
}

export default Toolstack;
