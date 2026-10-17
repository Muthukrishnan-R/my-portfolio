import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muthu Krishnan</strong>
              </h1>

              <div className="hero-intro-box">
                <div className="typewriter-box">
                  <Type />
                </div>
                <p className="hero-tagline">
                  I test beyond the happy path—validating workflows, investigating API behavior, and turning unexpected results into actionable insights.
                </p>
                <div className="hero-badge">
                  <span>QA Engineer</span>
                  <span className="badge-divider">•</span>
                  <span>Manual & API Testing</span>
                  <span className="badge-divider">•</span>
                  <span>GraphQL & Hasura</span>
                  <span className="badge-divider">•</span>
                  <span>E2E QA</span>
                  <span className="badge-divider">•</span>
                  <span>Test Automation</span>
                </div>
              </div>
            </Col>

            <Col md={5} className="home-img-col" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-hero-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
