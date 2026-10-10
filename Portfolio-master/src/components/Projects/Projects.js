import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GraphQLCaseStudy from "./GraphQLCaseStudy";

import paymentImg from "../../Assets/Projects/payment.jpg";
import assessmentImg from "../../Assets/Projects/assessment.jpg";
import schedulingImg from "../../Assets/Projects/scheduling.jpg";
import apiImg from "../../Assets/Projects/api-validation.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  const domainProjects = [
    {
      title: "Payment Services Validation",
      description:
        "Validating payment flows, transaction behavior, payment integrations, invoices, taxes, coupons, and discrepancies between UI and backend responses.",
      tags: ["Payment testing", "API validation", "Integration testing"],
      highlights: [
        "Transaction state and receipt verification",
        "Third-party payment gateway integration checks",
        "Tax, coupon, and invoice calculations",
      ],
      imgPath: paymentImg,
      badge: "Domain Testing",
    },
    {
      title: "Assessment & Proctoring Testing",
      description:
        "Testing assessment configuration, candidate journeys, question behavior, assessment completion, proctoring workflows, and result-related functionality.",
      tags: ["Functional testing", "E2E testing", "Regression"],
      highlights: [
        "Candidate test delivery & question rendering",
        "Proctoring events, permissions, and alerts",
        "Submission states and scoring triggers",
      ],
      imgPath: assessmentImg,
      badge: "Domain Testing",
    },
    {
      title: "Scheduling Engine Validation",
      description:
        "Validating slot availability, booking and rescheduling, date/time handling, timezone conversions, capacity, and generated scheduling occurrences.",
      tags: ["Workflow testing", "Date/time validation", "API testing"],
      highlights: [
        "Multi-timezone conversions (UTC to local)",
        "Double-booking prevention & capacity limits",
        "Recurring schedule occurrence checks",
      ],
      imgPath: schedulingImg,
      badge: "Domain Testing",
    },
    {
      title: "Backend & GraphQL API Testing",
      description:
        "Investigating GraphQL operations, request arguments, schema rules, authorization behavior, and unexpected response payloads through Hasura.",
      tags: ["GraphQL", "Hasura", "Negative testing", "Schema validation"],
      highlights: [
        "Schema contract verification & mutation tests",
        "Role-based headers & permission testing",
        "Negative test cases for missing arguments",
      ],
      imgPath: apiImg,
      badge: "API Testing",
    },
  ];

  const technicalProjects = [
    {
      title: "Web Test Automation with Playwright",
      description:
        "Developing automated end-to-end regression suites using JavaScript and Playwright. Focused on increasing test coverage, validating user journeys, and reducing repetitive manual regression cycles.",
      tags: ["Playwright", "JavaScript", "Automation", "E2E Testing"],
      highlights: [
        "Page Object Model (POM) design pattern",
        "API & UI assertions combined",
        "Cross-browser and headless execution",
      ],
      imgPath: editor,
      ghLink: "https://github.com/Muthukrishnan-R",
      badge: "Test Automation",
    },
    {
      title: "LitterVision - AI Litter Detection",
      description:
        "AI-based litter detection system using YOLOv5, PaddleOCR, and React.js. Detects waste, license plates, and faces in real-time, with violation data stored in SQLite for record-keeping and review.",
      tags: ["Python", "YOLOv5", "Computer Vision", "React.js"],
      highlights: [
        "Real-time object detection model",
        "License plate & text OCR pipeline",
        "Full-stack React dashboard",
      ],
      imgPath: chatify,
      ghLink: "https://github.com/Muthukrishnan-R/AI-Litter-Detection-System",
      badge: "Engineering Capstone",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* HEADER */}
        <h1 className="project-heading text-center">
          Quality Assurance <strong className="purple">Case Studies & Work</strong>
        </h1>
        <p style={{ color: "white" }} className="text-center mb-5">
          Real-world API investigations, domain workflow validation, and exploratory automation
        </p>

        {/* FEATURED CASE STUDY */}
        <GraphQLCaseStudy />

        {/* PRODUCT DOMAIN VALIDATION PROJECTS */}
        <div className="domain-section-header text-center mb-4 mt-5">
          <h2 className="project-heading">
            Product Domain <strong className="purple">Testing Work</strong>
          </h2>
          <p className="text-muted-custom">
            Testing end-to-end flows across assessment, scheduling, and payment microservices
          </p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {domainProjects.map((project, idx) => (
            <Col md={6} lg={6} className="project-card mb-4" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                tags={project.tags}
                highlights={project.highlights}
                badge={project.badge}
              />
            </Col>
          ))}
        </Row>

        {/* AUTOMATION & ENGINEERING PROJECTS */}
        <div className="domain-section-header text-center mb-4 mt-4">
          <h2 className="project-heading">
            Automation & <strong className="purple">Engineering Projects</strong>
          </h2>
          <p className="text-muted-custom">
            Test automation exploration and software development projects
          </p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {technicalProjects.map((project, idx) => (
            <Col md={6} lg={6} className="project-card mb-4" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                tags={project.tags}
                highlights={project.highlights}
                ghLink={project.ghLink}
                badge={project.badge}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
