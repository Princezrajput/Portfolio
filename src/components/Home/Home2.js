import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a motivated Software Engineering graduate with a strong
              interest in building practical, user-focused applications. I enjoy
              working across the full development lifecycle—from understanding
              requirements and designing solutions to implementing clean,
              maintainable code. My technical foundation includes JavaScript,
              React, Python, HTML, and CSS, and I am continuously strengthening
              my problem-solving and backend development skills. I value writing
              structured, readable code and believe in learning by building
              real-world projects. As a fresher, my focus is on gaining hands-on
              experience, improving system design thinking, and contributing to
              impactful software products. I am eager to work in collaborative
              environments where I can grow as an engineer while delivering
              reliable and efficient solutions.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, python, react, Node.js, and c++{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Full stack development,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
