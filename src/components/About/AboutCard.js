import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "18px", lineHeight: "1.6" }}>
            Hi, I'm <span className="purple">Sruthi S</span> from{" "}
            <span className="purple">Coimbatore, India</span>. A passionate final-year CSE student
            at Kumaraguru College of Technology, I'm driven by creativity, technology, and
            self-expression. I love blending design with logic to craft unique and meaningful
            experiences that leave an impact.
          </p>

          <p style={{ textAlign: "justify", fontSize: "18px", lineHeight: "1.6" }}>
            I'm on a constant journey to learn, grow, and share ideas. Whether it's through design,
            business, or storytelling, I aim to inspire and help others connect with their authentic selves.
          </p>

          <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
            Here's what I love doing:
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            <div className="about-activity">
              <ImPointRight style={{ color: "#9b7ea0" }} /> <strong>Design & Storytelling</strong>
            </div>
            <div className="about-activity">
              <ImPointRight style={{ color: "#9b7ea0" }} /> <strong>Writing & Self-Discovery</strong>
            </div>
            <div className="about-activity">
              <ImPointRight style={{ color: "#9b7ea0" }} /> <strong>Helping Others Connect</strong>
            </div>
            <div className="about-activity">
              <ImPointRight style={{ color: "#9b7ea0" }} /> <strong>Drawing & Visual Expression</strong>
            </div>
            <div className="about-activity">
              <ImPointRight style={{ color: "#9b7ea0" }} /> <strong>Reading & Exploring</strong>
            </div>
          </div>

          <p style={{ color: "rgb(155 126 172)", fontSize: "18px", textAlign: "center", marginTop: "20px" }}>
            "Stay curious, keep learning, and embrace the adventure of life!"
          </p>

          <footer className="blockquote-footer" style={{ textAlign: "center" }}>
            Sruthi
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
