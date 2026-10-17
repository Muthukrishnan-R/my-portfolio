import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaSearchPlus,
  FaSyncAlt,
  FaDatabase,
  FaCalendarAlt,
  FaExchangeAlt,
  FaLink,
} from "react-icons/fa";
import {
  MdOutlineFactCheck,
  MdOutlineBugReport,
  MdApi,
  MdErrorOutline,
} from "react-icons/md";

function About() {
  const responsibilities = [
    {
      num: "01",
      title: "Functional and Manual Testing",
      icon: <MdOutlineFactCheck className="resp-icon" />,
      desc: "I validate application functionality against requirements and expected business behavior. I test positive, negative, boundary, and regression scenarios to identify issues before they affect users.",
      examples:
        "Form validation, candidate journeys, configuration behavior, navigation, browser/device behavior, and workflow transitions.",
    },
    {
      num: "02",
      title: "End-to-End Workflow Validation",
      icon: <FaProjectDiagram className="resp-icon" />,
      desc: "I test complete workflows involving recruiters, candidates, assessments, scheduling, proctoring, and payments. I verify how data and state move between steps, services, and integrations.",
      examples:
        "Candidate enrollment, assessment completion, slot booking, payment processing, and interview workflows.",
    },
    {
      num: "03",
      title: "API and GraphQL Testing",
      icon: <MdApi className="resp-icon" />,
      desc: "I work with GraphQL queries and mutations through Hasura, validating request structures, arguments, input types, response fields, and backend behavior.",
      examples:
        "Schema mismatches, missing arguments, invalid input types, incorrect request headers, permission failures, and HTTP 200 responses containing GraphQL errors.",
    },
    {
      num: "04",
      title: "Authentication and Permission Testing",
      icon: <FaShieldAlt className="resp-icon" />,
      desc: "I investigate how requests behave under different authentication and authorization conditions, including missing or invalid credentials and insufficient permissions.",
      examples:
        "Access control, role-dependent behavior, request headers, and expected error handling.",
    },
    {
      num: "05",
      title: "Defect Investigation and Reporting",
      icon: <MdOutlineBugReport className="resp-icon" />,
      desc: "I document reproducible defects with clear titles, preconditions, steps, expected results, actual results, and supporting evidence. I work with developers to clarify behavior and validate fixes.",
      examples:
        "Tools: Linear for issue tracking and Tuskr / TestRail for test management.",
    },
    {
      num: "06",
      title: "Regression and Release Validation",
      icon: <FaSyncAlt className="resp-icon" />,
      desc: "I validate fixes and related functionality before releases, execute regression scenarios, investigate high-priority issues, and communicate findings to the relevant teams.",
      examples:
        "Change impact analysis, integration stability, defect verification, and release readiness sign-off.",
    },
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Understand the Requirement",
      desc: "Review user stories, acceptance criteria, business rules, and dependencies.",
    },
    {
      step: "2",
      title: "Prepare Test Data & Configuration",
      desc: "Set up tenants, roles, workflows, assessments, service providers, payment scenarios, or scheduling data as needed.",
    },
    {
      step: "3",
      title: "Execute UI and API Tests",
      desc: "Use the application and API tools (Postman, Bruno, DevTools) to exercise expected and unexpected scenarios.",
    },
    {
      step: "4",
      title: "Inspect and Correlate Results",
      desc: "Compare inputs, response payloads, generated IDs, state changes, timestamps, and expected business behavior.",
    },
    {
      step: "5",
      title: "Document and Verify",
      desc: "Record evidence, report defects in Linear, retest fixes, and execute relevant regression test suites.",
    },
  ];

  const dataTechniques = [
    {
      title: "Test Data Preparation",
      desc: "Create or configure data required to exercise a particular workflow.",
      icon: <FaDatabase />,
    },
    {
      title: "API Request Validation",
      desc: "Check query & mutation arguments, variables, input types, and headers.",
      icon: <MdApi />,
    },
    {
      title: "Response Analysis",
      desc: "Inspect returned data and errors instead of relying only on HTTP status codes.",
      icon: <MdErrorOutline />,
    },
    {
      title: "Data Consistency",
      desc: "Compare what the UI displays with relevant API responses and expected state.",
      icon: <FaExchangeAlt />,
    },
    {
      title: "Date & Timezone Validation",
      desc: "Check slot times, date boundaries, booking windows, and UTC/local conversions.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Negative Data Testing",
      desc: "Use missing, invalid, unsupported, or boundary inputs to verify resilience.",
      icon: <FaSearchPlus />,
    },
    {
      title: "Traceability",
      desc: "Record relevant IDs and link test cases to defects or user stories for reproduction.",
      icon: <FaLink />,
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* BIO SECTION */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* WHAT I DO AT WORK */}
        <Row className="mt-5 mb-4">
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              What I Do <strong className="purple">At Work</strong>
            </h1>
            <p className="text-muted-custom">
              Core responsibilities spanning functional, API, integration, and release validation
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          {responsibilities.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="responsibility-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="resp-num purple">{item.num}</span>
                    <div className="resp-icon-wrap">{item.icon}</div>
                  </div>
                  <h4 className="resp-title mb-2">{item.title}</h4>
                  <p className="resp-desc text-muted-custom flex-grow-1">
                    {item.desc}
                  </p>
                  <div className="resp-examples mt-3">
                    <span className="purple fw-bold small">Scope & Examples: </span>
                    <span className="small text-light">{item.examples}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* HOW I WORK WITH DATA DURING QA */}
        <Row className="mt-5 mb-4">
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              How I Work With <strong className="purple">Data During QA</strong>
            </h1>
            <p className="text-muted-custom">
              Technical rigor from requirements analysis to verified production behavior
            </p>
          </Col>
        </Row>

        {/* WORKFLOW TIMELINE STEPS */}
        <Row className="justify-content-center mb-5">
          <Col md={12}>
            <div className="qa-workflow-container">
              <h4 className="qa-workflow-title purple mb-4 text-center">
                My Workflow: From Requirements to Verified Behavior
              </h4>
              <Row className="g-3">
                {workflowSteps.map((ws, i) => (
                  <Col md={4} lg={2} key={i} className={`workflow-step-col ${i === 4 ? 'col-lg-4' : ''}`}>
                    <div className="workflow-step-box h-100">
                      <div className="step-circle">{ws.step}</div>
                      <h6 className="step-title mt-3 mb-2">{ws.title}</h6>
                      <p className="step-desc text-muted-custom small mb-0">
                        {ws.desc}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* DATA TECHNIQUES GRID */}
        <Row className="justify-content-center mb-5">
          <Col md={12} className="mb-3">
            <h4 className="purple text-center">
              What Working With Data Means in My QA Role
            </h4>
          </Col>
          {dataTechniques.map((dt, i) => (
            <Col lg={4} md={6} key={i} className="mb-3">
              <div className="data-technique-pill d-flex align-items-start h-100">
                <div className="technique-icon me-3 mt-1 purple">{dt.icon}</div>
                <div>
                  <h6 className="technique-title mb-1 text-light">{dt.title}</h6>
                  <p className="technique-desc text-muted-custom small mb-0">
                    {dt.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* SKILLSET */}
        <h1 className="project-heading mt-5">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <p className="text-muted-custom text-center mb-4">
          Categorized technical competencies & testing methodologies
        </p>
        <Techstack />

        {/* TOOLS */}
        <h1 className="project-heading mt-4">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <p className="text-muted-custom text-center mb-4">
          API clients, test management systems, and issue trackers
        </p>
        <Toolstack />

        {/* GITHUB */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
