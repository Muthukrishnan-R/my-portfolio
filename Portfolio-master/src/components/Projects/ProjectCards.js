import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      {props.imgPath && (
        <div className="project-img-container">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          {props.badge && (
            <span className="project-category-badge">{props.badge}</span>
          )}
        </div>
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-card-title text-light">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="project-card-desc flex-grow-1">
          {props.description}
        </Card.Text>

        {props.tags && props.tags.length > 0 && (
          <div className="project-tags-container mb-3">
            {props.tags.map((tag, i) => (
              <span key={i} className="project-tag-pill">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {props.highlights && props.highlights.length > 0 && (
          <div className="project-highlights mb-3">
            <small className="text-muted-custom d-block mb-1">Key Focus:</small>
            {props.highlights.map((h, i) => (
              <div key={i} className="small text-light d-flex align-items-center mb-1">
                <FaCheckCircle className="purple me-2" style={{ fontSize: "0.8em" }} />
                {h}
              </div>
            ))}
          </div>
        )}

        <div className="project-actions mt-auto pt-2">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="btn-sm me-2">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="btn-sm"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
