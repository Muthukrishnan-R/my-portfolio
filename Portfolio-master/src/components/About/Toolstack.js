import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLinear,
  SiGit,
  SiGooglechrome,
  SiWindowsterminal,
} from "react-icons/si";
import { FaTasks, FaVial } from "react-icons/fa";
import { MdOutlineBugReport } from "react-icons/md";

function Toolstack() {
  const toolCategories = [
    {
      category: "API Clients & Inspection",
      icon: <FaVial className="tool-cat-icon me-2" />,
      tools: [
        { name: "Postman", role: "API collection runner, header & body validation" },
        { name: "Bruno", role: "Lightweight, offline Git-friendly API client" },
        { name: "Chrome DevTools", role: "Network tab inspection, payload & status code analysis" },
      ],
    },
    {
      category: "Test Management & Tracking",
      icon: <FaTasks className="tool-cat-icon me-2" />,
      tools: [
        { name: "TestRail", role: "Test case authoring, run execution & traceability" },
        { name: "Tuskr", role: "Test suite structure, sprint test planning & metrics" },
      ],
    },
    {
      category: "Defect & Issue Management",
      icon: <MdOutlineBugReport className="tool-cat-icon me-2" />,
      tools: [
        { name: "Linear", role: "Structured defect documentation, prioritization & triage" },
      ],
    },
  ];

  return (
    <div className="toolstack-container pb-4">
      {/* TOOL CARDS BY DOMAIN */}
      <Row className="justify-content-center mb-4">
        {toolCategories.map((cat, idx) => (
          <Col md={4} key={idx} className="mb-3">
            <Card className="tool-category-card h-100">
              <Card.Header className="tool-card-hdr d-flex align-items-center">
                {cat.icon}
                <span className="tool-card-title">{cat.category}</span>
              </Card.Header>
              <Card.Body>
                {cat.tools.map((t, tIdx) => (
                  <div key={tIdx} className="tool-item mb-2">
                    <strong className="purple tool-name">{t.name}</strong>
                    <div className="tool-role text-muted-custom small">{t.role}</div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ICON GRID */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Postman">
          <SiPostman />
          <div className="tech-icon-label">Postman</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Linear">
          <SiLinear />
          <div className="tech-icon-label">Linear</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Chrome DevTools">
          <SiGooglechrome />
          <div className="tech-icon-label">DevTools</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="VS Code">
          <SiVisualstudiocode />
          <div className="tech-icon-label">VS Code</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Git">
          <SiGit />
          <div className="tech-icon-label">Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Terminal">
          <SiWindowsterminal />
          <div className="tech-icon-label">Terminal</div>
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
