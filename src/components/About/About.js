import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to <strong className="purple">Know Me</strong>
            </h1>
            <Aboutcard>
              <p>
                Hello! I'm a curious soul who finds joy in exploring the endless
                possibilities of creativity, learning, and self-expression. My
                journey is driven by a thirst for knowledge and a passion for
                bringing unique ideas to life.
              </p>
              <p>
                As a <strong className="purple">CSE graduate</strong> with a
                deep love for <strong>design</strong>, <strong>business</strong>, and
                <strong>storytelling</strong>, I thrive on blending logic and art
                to create meaningful experiences. Whether it’s designing graphics, solving
                problems, or helping others reconnect with their authentic selves, I’m all in.
              </p>
              <p>
                I believe in staying true to myself, embracing creativity, and
                learning something new every day. Life, after all, is a gentle
                adventure worth exploring.
              </p>
            </Aboutcard>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Things I'm <strong className="purple">Passionate</strong> About
        </h1>

        <Techstack />

       
      </Container>
    </Container>
  );
}

export default About;
