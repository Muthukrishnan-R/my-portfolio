import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaCheckCircle, FaBriefcase, FaArrowRight } from "react-icons/fa";
import paymentImg from "../../Assets/Projects/payment.jpg";
import assessmentImg from "../../Assets/Projects/assessment.jpg";
import schedulingImg from "../../Assets/Projects/scheduling.jpg";
import apiImg from "../../Assets/Projects/api-validation.jpg";

function Home2() {
  const coreSkills = [
    "Manual Testing",
    "API Testing",
    "GraphQL / Hasura",
    "End-to-End Testing",
    "Regression Testing",
    "Defect Management",
  ];

  const domains = [
    {
      title: "Payment Services",
      desc: "Validating payment flows, transaction behavior, payment integrations, invoices, taxes, coupons, and discrepancies between UI and backend responses.",
      keywords: ["Payment testing", "API validation", "Integration testing"],
      img: paymentImg,
    },
    {
      title: "Assessment & Proctoring",
      desc: "Testing assessment configuration, candidate journeys, question behavior, assessment completion, proctoring workflows, and result-related functionality.",
      keywords: ["Functional testing", "E2E testing", "Regression"],
      img: assessmentImg,
    },
    {
      title: "Scheduling",
      desc: "Validating slot availability, booking and rescheduling, date/time handling, timezone conversions, capacity, and generated scheduling occurrences.",
      keywords: ["Workflow testing", "Date/time validation", "API testing"],
      img: schedulingImg,
    },
    {
      title: "Backend & API Validation",
      desc: "Investigating GraphQL operations, request arguments, schema rules, authorization behavior, and unexpected response payloads.",
      keywords: ["GraphQL", "Hasura", "Negative testing"],
      img: apiImg,
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* CURRENT ROLE CARD */}
        <Row className="justify-content-center mb-5">
          <Col md={11}>
            <div className="current-role-card">
              <div className="role-header d-flex flex-wrap align-items-center justify-content-between mb-3">
                <div>
                  <span className="badge-role">
                    <FaBriefcase className="me-2" /> CURRENT ROLE
                  </span>
                  <h2 className="role-title mt-2 mb-1">
                    QA Engineer <span className="purple">@ Talview</span>
                  </h2>
                  <p className="role-subtitle">
                    Quality Assurance · Web Applications & APIs
                  </p>
                </div>
                <div className="role-action mt-2 mt-md-0">
                  <Link to="/project" className="btn btn-outline-purple">
                    View Case Study <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
              <p className="role-description">
                I work on validating web-based assessment, scheduling, and payment workflows. My role involves understanding product requirements, designing and executing test scenarios, investigating API behavior, identifying defects, and validating fixes across development and production-release workflows.
              </p>
              <div className="role-badges">
                {coreSkills.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    <FaCheckCircle className="pill-icon" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* ABOUT ME & AVATAR */}
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              <p>
                I'm a <b>Quality Assurance Engineer</b> focused on building reliable, functional, and consistent software experiences. My work involves testing web applications, validating APIs, investigating unexpected system behavior, and ensuring that application workflows perform as expected.
              </p>
              <p>
                At <b>Talview</b>, I work across Payment, Assessment, and Scheduling domains, testing workflows that involve multiple components, configurations, APIs, and user interactions.
              </p>
              <p>
                My day-to-day work goes beyond checking whether a feature works on the happy path. I analyze requirements, identify edge cases, create structured test cases, execute functional and regression testing, validate GraphQL queries and mutations, and investigate discrepancies between expected and actual behavior.
              </p>
              <p>
                I also work with backend data and API responses, including schema validations, authentication and authorization scenarios, request headers, and cases where an HTTP 200 response contains GraphQL errors. This helps me investigate issues beyond the user interface and understand how different application layers interact.
              </p>
              <p>
                I collaborate with developers, product managers, and QA teammates to clarify requirements, prioritize defects, validate fixes, and support release readiness.
              </p>
              <p>
                I'm continuously expanding my technical skills in API testing, backend systems, and test automation (Playwright, Selenium), with a focus on improving test coverage, reducing repetitive effort, and delivering higher software quality.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* DOMAINS SECTION */}
        <Row className="mt-5 pt-4">
          <Col md={12} className="text-center mb-4">
            <h1 className="project-heading">
              Product <strong className="purple">Domains</strong> I Work On
            </h1>
            <p className="text-muted-custom">
              Validating complex multi-tenant workflows across web applications and backend APIs
            </p>
          </Col>
          {domains.map((domain, index) => (
            <Col md={6} lg={6} key={index} className="mb-4">
              <Card className="domain-card h-100">
                <div className="domain-card-img-wrapper">
                  <Card.Img variant="top" src={domain.img} alt={domain.title} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="domain-card-title">{domain.title}</Card.Title>
                  <Card.Text className="domain-card-text flex-grow-1">
                    {domain.desc}
                  </Card.Text>
                  <div className="domain-keywords mt-3">
                    {domain.keywords.map((kw, i) => (
                      <span key={i} className="domain-tag">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* COLLABORATION & OWNERSHIP PHILOSOPHY */}
        <Row className="mt-4 mb-5">
          <Col md={12}>
            <div className="philosophy-box">
              <h3 className="philosophy-title purple mb-3">
                Approach to Collaboration & Ownership
              </h3>
              <p className="philosophy-text">
                My approach to quality assurance is based on ownership, structured investigation, and clear communication.
                I work across multiple product areas, prioritize testing based on release requirements and defect severity, and collaborate with developers and product managers to clarify expected behavior. When I identify an issue, I aim to provide enough information for the team to reproduce it, understand its impact, and validate the fix.
              </p>
              <p className="philosophy-text mb-0">
                I believe QA adds the most value when it is involved throughout the development lifecycle—not only when a feature is ready for final testing.
              </p>
            </div>
          </Col>
        </Row>

        {/* SOCIAL LINKS */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Muthukrishnan-R"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muthu-krishnan-6135ab322/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/the_trackchanger"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
