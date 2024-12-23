import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Ensure this image path is correct
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Sruthi, and I've always been curious about how things work, which led me to
              programming. Over time, I discovered my passion for building things and bringing
              ideas to life. 📚💻
              <br />
              <br />
              I’m comfortable with languages like{" "}
              <i>
                <b className="purple">Python, JavaScript (basics), and Django</b>
              </i>, and I enjoy creating things from scratch using{" "}
              <i>
                <b className="purple">React.js</b> and diving into web technologies.
              </i>
              <br />
              <br />
              My journey is still evolving, and I love to explore how to make applications more
              dynamic and user-friendly. Building simple, clean, and intuitive interfaces is
              something I strive for, and I enjoy working on projects that solve real problems.
              <br />
              <br />
              When I’m not coding, you’ll find me diving into new frameworks, tinkering with
              ideas, or just looking for ways to improve my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s connect! I’d love to exchange ideas and collaborate.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SRUTHICODER"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sruthi-s-3b3316224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
