import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  SiGraphql,
  SiJavascript,
  SiPython,
  SiPlaywright,
  SiSelenium,
  SiPuppeteer,
  SiDocker,
  SiLinux,
  SiAmazonaws,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaCheckDouble, FaCode, FaRobot, FaServer } from "react-icons/fa";
import { MdApi } from "react-icons/md";

function Techstack() {
  const skillCategories = [
    {
      title: "Core QA & Testing Methodologies",
      icon: <FaCheckDouble className="category-header-icon" />,
      description: "Established day-to-day testing practice across web apps and services",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Negative Testing",
        "End-to-End (E2E) Testing",
      ],
      badgeType: "qa-badge-primary",
    },
    {
      title: "API & Backend Validation",
      icon: <MdApi className="category-header-icon" />,
      description: "Deep inspection of queries, mutations, schemas, and payload responses",
      skills: [
        "GraphQL",
        "Hasura Engine",
        "REST API Testing",
        "Request/Response Validation",
        "Schema & Error Handling",
        "Auth & Permission Checks",
      ],
      badgeType: "qa-badge-api",
    },
    {
      title: "Programming Languages",
      icon: <FaCode className="category-header-icon" />,
      description: "Writing scripts, test logic, and understanding application source code",
      skills: ["Python", "Java", "JavaScript"],
      badgeType: "qa-badge-code",
    },
    {
      title: "Automation Learning & Development",
      icon: <FaRobot className="category-header-icon" />,
      description: "Continuously expanding test automation capabilities to increase test coverage",
      skills: ["Playwright", "Puppeteer", "Selenium", "JavaScript Automation"],
      badgeType: "qa-badge-automation",
    },
    {
      title: "Additional Technical Exposure",
      icon: <FaServer className="category-header-icon" />,
      description: "Infrastructure, developer environments, and deployment ecosystem",
      skills: ["Node.js", "GitHub / Git", "Linux", "AWS", "Docker"],
      badgeType: "qa-badge-infra",
    },
  ];

  return (
    <div className="techstack-container pb-4">
      <Row className="justify-content-center">
        {skillCategories.map((cat, idx) => (
          <Col lg={idx === 4 ? 12 : 6} md={12} key={idx} className="mb-4">
            <Card className="skill-category-card h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <div className="skill-cat-icon-wrap me-3">{cat.icon}</div>
                  <div>
                    <h5 className="skill-cat-title mb-0">{cat.title}</h5>
                    <small className="skill-cat-desc text-muted-custom">
                      {cat.description}
                    </small>
                  </div>
                </div>
                <div className="skill-pills-list mt-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={`skill-tag-pill ${cat.badgeType}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ICON BADGES GRID */}
      <h4 className="tech-icons-subheading text-center mt-4 mb-3 purple">
        Key Technologies & Frameworks
      </h4>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="GraphQL">
          <SiGraphql />
          <div className="tech-icon-label">GraphQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <SiPython />
          <div className="tech-icon-label">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
          <div className="tech-icon-label">Java</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <SiJavascript />
          <div className="tech-icon-label">JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Playwright">
          <SiPlaywright />
          <div className="tech-icon-label">Playwright</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Selenium">
          <SiSelenium />
          <div className="tech-icon-label">Selenium</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Puppeteer">
          <SiPuppeteer />
          <div className="tech-icon-label">Puppeteer</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <SiNodedotjs />
          <div className="tech-icon-label">Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Docker">
          <SiDocker />
          <div className="tech-icon-label">Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Linux">
          <SiLinux />
          <div className="tech-icon-label">Linux</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="AWS">
          <SiAmazonaws />
          <div className="tech-icon-label">AWS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="GitHub">
          <SiGithub />
          <div className="tech-icon-label">GitHub</div>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
