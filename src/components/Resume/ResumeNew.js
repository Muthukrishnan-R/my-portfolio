import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Muthu WD resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaCheckCircle, FaCertificate } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPdfScale = () => {
    if (width > 1200) return 1.7;
    if (width > 992) return 1.4;
    if (width > 768) return 1.1;
    if (width > 576) return 0.85;
    if (width > 400) return 0.6;
    return 0.48;
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Container className="mb-4">
          <Row className="justify-content-center text-center mb-4">
            <Col md={10}>
              <h1 className="project-heading">
                Professional <strong className="purple">Resume</strong>
              </h1>
              <p className="text-muted-custom">
                QA Engineer with hands-on experience across web applications, GraphQL APIs, and multi-tenant workflows
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col md={10} lg={9}>
              <Card className="current-role-card p-4">
                <Row className="align-items-center">
                  <Col md={8}>
                    <div className="d-flex align-items-center mb-2">
                      <FaBriefcase className="purple me-2" />
                      <strong className="text-light fs-5">QA Engineer · Talview</strong>
                    </div>
                    <div className="text-muted-custom small mb-2">
                      Bangalore · Assessment, Proctoring, Interview & Payment Domains
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaGraduationCap className="purple me-2" />
                      <span className="text-light small">
                        B.Sc. Computer Science · Sathyabama University (GPA: 7.12 / 10.0)
                      </span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaCertificate className="purple me-2" />
                      <span className="text-muted-custom small">
                        Certified: Python (HackerRank) · Data Science & NLP (Infosys Springboard)
                      </span>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="skill-pill small py-1 px-2">
                        <FaCheckCircle className="pill-icon" /> 300+ Weekly Test Cases
                      </span>
                      <span className="skill-pill small py-1 px-2">
                        <FaCheckCircle className="pill-icon" /> 25–27 Defects Reported Weekly
                      </span>
                      <span className="skill-pill small py-1 px-2">
                        <FaCheckCircle className="pill-icon" /> Postman & Bruno API Testing
                      </span>
                      <span className="skill-pill small py-1 px-2">
                        <FaCheckCircle className="pill-icon" /> TestRail & Tuskr
                      </span>
                    </div>
                  </Col>
                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                    <Button
                      variant="primary"
                      href={pdf}
                      target="_blank"
                      className="w-100 py-2"
                    >
                      <AiOutlineDownload />
                      &nbsp;Download CV
                    </Button>
                    <div className="text-center mt-2">
                      <small className="text-muted-custom">
                        {numPages ? `${numPages} Pages Document` : "PDF Resume"}
                      </small>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages || 1), (el, index) => (
              <div key={`page_${index + 1}`} className="mb-4 shadow">
                <Page
                  pageNumber={index + 1}
                  scale={getPdfScale()}
                />
              </div>
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
