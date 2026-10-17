import React, { useState } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import { FaExclamationTriangle, FaCheck, FaVial } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";

function GraphQLCaseStudy() {
  const [activeTab, setActiveTab] = useState("response");

  const investigationSteps = [
    {
      step: 1,
      title: "Execute Baseline Request",
      desc: "Execute the query or mutation with a valid request payload and valid authentication headers.",
    },
    {
      step: 2,
      title: "Inspect Status & Payload",
      desc: "Inspect the HTTP status code AND both GraphQL `data` and `errors` fields simultaneously.",
    },
    {
      step: 3,
      title: "Isolate & Vary Inputs",
      desc: "Vary one parameter at a time: required arguments, missing variables, invalid data types, or permission headers.",
    },
    {
      step: 4,
      title: "Compare Against Schema",
      desc: "Compare the response against the Hasura schema definitions and expected business rules.",
    },
    {
      step: 5,
      title: "Document Contract Discrepancy",
      desc: "Log reproducible defect with full headers, variable payloads, and GraphQL error extensions.",
    },
  ];

  const demonstratesPills = [
    "Negative Testing",
    "Schema Validation",
    "Response Analysis",
    "Defect Investigation",
  ];

  const sampleRequest = `mutation SubmitCandidateAssessment(
  $candidate_id: uuid!
  $assessment_id: uuid!
  $answers: jsonb
) {
  submit_assessment(
    candidate_id: $candidate_id
    assessment_id: $assessment_id
    answers: $answers
  ) {
    status
    submission_id
  }
}

// Variables:
{
  "candidate_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "assessment_id": null, // Intentionally null to test required constraint
  "answers": {}
}`;

  const sampleResponse = `HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "errors": [
    {
      "message": "variable 'assessment_id' of type 'uuid!' used in position expecting 'uuid!' got null",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ],
      "path": ["variableValues", "assessment_id"],
      "extensions": {
        "code": "validation-failed"
      }
    }
  ],
  "data": null
}`;

  const schemaInfo = `type Mutation {
  submit_assessment(
    candidate_id: uuid!
    assessment_id: uuid!
    answers: jsonb
  ): AssessmentSubmissionOutput
}

type AssessmentSubmissionOutput {
  status: String!
  submission_id: uuid!
}`;

  return (
    <Card className="case-study-featured-card mb-5">
      <Card.Body className="p-4 p-md-5">
        {/* HEADER */}
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
          <Badge bg="purple" className="case-study-badge px-3 py-2 mb-2 mb-md-0">
            <FaVial className="me-2" /> FEATURED TECHNICAL CASE STUDY
          </Badge>
          <div className="case-study-meta text-muted-custom small">
            API Testing · GraphQL / Hasura · Negative Testing
          </div>
        </div>

        <h2 className="case-study-title text-light mb-3">
          Investigating GraphQL Errors Behind <span className="purple">HTTP 200 Responses</span>
        </h2>

        {/* PROBLEM BOX */}
        <div className="problem-alert-box mb-4">
          <div className="d-flex align-items-start">
            <FaExclamationTriangle className="problem-icon me-3 mt-1" />
            <div>
              <strong className="text-warning d-block mb-1">The Problem:</strong>
              <p className="mb-0 text-light problem-text">
                An API request can return HTTP <code className="status-code-pill">200 OK</code> even though the GraphQL response body contains a fatal error. Validating only the HTTP status code creates false-positive test passes and conceals critical backend failures from automated and manual test suites.
              </p>
            </div>
          </div>
        </div>

        {/* INVESTIGATION STEPS & DEMONSTRATION */}
        <Row className="mb-4">
          <Col lg={7} className="mb-4 mb-lg-0">
            <h5 className="purple mb-3">Investigation Approach</h5>
            <div className="investigation-steps-list">
              {investigationSteps.map((item) => (
                <div key={item.step} className="step-item d-flex align-items-start mb-3">
                  <span className="step-number-badge me-3">{item.step}</span>
                  <div>
                    <h6 className="step-item-title mb-1 text-light">{item.title}</h6>
                    <p className="step-item-desc text-muted-custom small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={5}>
            <h5 className="purple mb-3">What This Demonstrates</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {demonstratesPills.map((pill, i) => (
                <span key={i} className="demonstrates-pill">
                  <FaCheck className="me-1 small" /> {pill}
                </span>
              ))}
            </div>

            <div className="takeaway-box p-3">
              <h6 className="purple mb-2">Key Takeaway</h6>
              <p className="small text-light mb-0">
                A successful HTTP status does not guarantee a successful GraphQL operation. QA must rigorously evaluate the GraphQL <code className="purple">errors</code> array, data structures, and the intended business contract beyond the HTTP transport layer.
              </p>
            </div>
          </Col>
        </Row>

        {/* SANITIZED CODE / PAYLOAD VIEWER */}
        <div className="code-viewer-container mt-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between viewer-tabs mb-2">
            <div className="tab-buttons">
              <Button
                variant={activeTab === "response" ? "primary" : "outline-secondary"}
                size="sm"
                className="me-2 mb-1"
                onClick={() => setActiveTab("response")}
              >
                Actual Response (Status 200 OK)
              </Button>
              <Button
                variant={activeTab === "request" ? "primary" : "outline-secondary"}
                size="sm"
                className="me-2 mb-1"
                onClick={() => setActiveTab("request")}
              >
                GraphQL Request & Variables
              </Button>
              <Button
                variant={activeTab === "schema" ? "primary" : "outline-secondary"}
                size="sm"
                className="mb-1"
                onClick={() => setActiveTab("schema")}
              >
                Schema Contract
              </Button>
            </div>
            <small className="text-muted-custom">
              <SiGraphql className="purple me-1" /> Sanitized Payload Sample
            </small>
          </div>

          <pre className="code-box p-3">
            <code>
              {activeTab === "response" && sampleResponse}
              {activeTab === "request" && sampleRequest}
              {activeTab === "schema" && schemaInfo}
            </code>
          </pre>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GraphQLCaseStudy;

