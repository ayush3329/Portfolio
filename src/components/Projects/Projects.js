
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aditi from "../../Assets/Projects/chatify.png"; // Replace with actual image path
import studyNotion from "../../Assets/Projects/chatify.png"; // Replace with actual image path
import aiGuardian from "../../Assets/Projects/suicide.png"; // Replace with actual image path
import fakeNews from "../../Assets/Projects/blog.png"; // Replace with actual image path

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
              imgPath={studyNotion}
              isBlog={false}
              title="Instagram"
              description="Developed a Next.js-based Instagram web clone with real-time messaging using WebSocket and Redis Pub/Sub. Implemented WebSocket for instant communication between users, enabling real-time updates of posts and notification.Integrated Redis Pub/Sub for efficient message passing, enhancing the scalability and responsiveness of the application"
              ghLink="https://github.com/ayush3329/InstagramNEXT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aditi}
              isBlog={false}
              title="Aditi - Hospital Management System"
              description="A comprehensive hospital management system built with the MERN stack, including features like appointment booking, doctor availability, and user/admin dashboards. Improved patient workflows by 30% and streamlined appointment management for over 500 patients monthly."
              ghLink="https://github.com/SAHILSINGHRAWAT/Aditi.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiGuardian}
              isBlog={false}
              title="AI Guardian"
              description="Developed a real-time communication infrastructure for threat analysis using Redis Pub/Sub. Created a custom proxy server for ethical AI, implementing DNS filtering and ML models to monitor and restrict misuse of AI tools, with an 84% accuracy in real-time risk identification."
              ghLink="https://github.com/ayush3329/knacktohack-Final"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
