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
              title="Zomoto Rating Prediction"
              description="Zomoto rating prediction using machine learning algorithms like Linear Regression,Random Forest and ExtraTree Regressor with this algorithms prediction to be more accqurate one."
              ghLink="https://github.com/tzktz/zomoto-rating-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bank stmt conversion"
              description="Bank statement conversion is a Python Flask application that simplifies the extraction of transaction tables from PDF files, such as bank statements. It provides a user-friendly REST API to extract data in JSON or Excel or Csv formats."
              ghLink="https://github.com/codeplugtech/Bank_statement_conversion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Solutions For Railways"
              description="Collobrate with IBM for this project to provide an QR code scanned ticket reservation system to ensure the digitalized travel experience to the current world uninterrupt booking experience makes user friendly."
              ghLink="https://github.com/tzktz/IBM-Project-705-1658315842"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
