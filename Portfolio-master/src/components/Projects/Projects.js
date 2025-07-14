import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LitterVision"
              description="AI-based litter detection system using YOLOv5, PaddleOCR, and React.js. Detects waste, license plates, and faces in real-time, with violation data stored in SQLite for record-keeping and review."
              ghLink="https://github.com/Muthukrishnan-R/AI-Litter-Detection-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="landing-page-portfolio"
              description="A personal developer portfolio built with React.js, showcasing projects, skills, and career goals. Designed to be clean, responsive, and modern—acting as a digital resume to represent my journey and growth as a developer."
              ghLink="https://github.com/Muthukrishnan-R/landing-page-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="html-email-template"
              description="Responsive and visually appealing HTML email template built with HTML and inline CSS, compatible across major email clients. Designed for marketing, newsletters, or transactional emails with a focus on clean layout and readability."
              ghLink="https://github.com/Muthukrishnan-R/html-email-template"             
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
