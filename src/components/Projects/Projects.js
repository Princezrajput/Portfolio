import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import Seatsync from "../../Assets/Projects/Seatsync.png";
import QuizApp from "../../Assets/Projects/QuizApp.png";

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
              imgPath={Seatsync}
              isBlog={false}
              title="Seat-sync"
              description="Seat-Sync is an online bus seat booking system built using the MERN stack. It allows users to view real-time seat availability, select preferred seats, and confirm bookings seamlessly, providing a smooth and efficient ticket reservation experience."
              ghLink="https://github.com/Princezrajput/Seat-sync"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="QUIZ APP"
              description="Quiz App is an interactive web application built using React.js. It allows users to attempt quizzes with multiple-choice questions, receive instant feedback, and view their final scores, providing an engaging and user-friendly learning experience."
              ghLink="https://github.com/Princezrajput/Quiz_APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fake Image Detection System"
              description="Fake Image Detection System is a deep learning–based project designed to distinguish real images from AI-generated fake images. The system uses a hybrid architecture combining Convolutional Neural Networks (CNN), Self-Attention, and Graph Attention Networks (GAT) to detect subtle generative artifacts and structural inconsistencies present in synthetic images. Trained on datasets containing both real images and AI-generated images from models like Stable Diffusion, Midjourney, and StyleGAN, the project demonstrates the effectiveness of deep learning techniques in digital image forensics and content verification."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
