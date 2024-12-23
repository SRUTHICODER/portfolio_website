import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vinveliImage from "../../Assets/Projects/vinveli.png"; // Replace with actual image for Vinveli
import socioImage from "../../Assets/Projects/socio.png"; // Replace with actual image for Socio
import klanImage from "../../Assets/Projects/klan.png"; // Replace with actual image for Klan

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1: Vinveli */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinveliImage} // Replace with actual image
              isBlog={false}
              title="Vinveli"
              description="Vinveli is a platform designed for users to share and discover creative content. The project aims to build a social platform using modern web technologies. I have worked on front-end features and UI design using React.js."
              ghLink="https://github.com/SRUTHICODER/Vinveli" // Your GitHub link
            />
          </Col>

          {/* Project 2: Socio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socioImage} // Replace with actual image
              isBlog={false}
              title="Socio"
              description="Socio is a social networking app where users can connect and share ideas. It uses a combination of front-end and back-end technologies to create a seamless user experience. I have contributed to the UI development and some functionality features."
              ghLink="https://github.com/SRUTHICODER/SOCIO" // Your GitHub link
            />
          </Col>

          {/* Project 3: Klan */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={klanImage} // Replace with actual image
              isBlog={false}
              title="Klan"
              description="Klan is a collaborative platform where users can create and manage groups for various activities. The project utilizes both front-end and back-end skills. My role involved creating responsive UI components using React.js."
              ghLink="https://github.com/SRUTHICODER/KLAN" // Your GitHub link
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
