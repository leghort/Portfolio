import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiCloud9, DiDocker, DiHtml5, DiMysql, DiNodejs, DiPython, DiRasberryPi, DiReact, DiRuby, DiWordpress, DiJava } from "react-icons/di"
import { ExternalLink } from "react-external-link";
import { SiAnsible, SiMariadbfoundation } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://nextcloud.com/">
        <Col xs={4} md={2} className="tech-icons">
          <DiCloud9 />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.docker.com/">
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://whatwg.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.oracle.com/java/">
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.mysql.com/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <SiMariadbfoundation />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://nodejs.org/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.python.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">
        <Col xs={4} md={2} className="tech-icons">
          <DiRasberryPi />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://fr.reactjs.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.ruby-lang.org/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <DiRuby />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://wordpress.com/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <DiWordpress />
        </Col>
      </ExternalLink>
      

      <ExternalLink href="https://www.ansible.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiAnsible />
        </Col>
      </ExternalLink>
    </Row>
  );
}

export default Techstack;