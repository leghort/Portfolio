import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Portfolio de Cossu Médéric</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/leghort"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-cossu-a44b72225/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                </a>
              </li>
            <li className="social-icons">
              <a
                href="https://discordapp.com/users/184411677469573121"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mederic@cossu.tech"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
