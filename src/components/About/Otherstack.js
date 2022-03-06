import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWordpress, DiTrello, DiGithubBadge } from "react-icons/di"
import { ExternalLink } from "react-external-link";
import { SiAnsible, SiMariadbfoundation, SiNextcloud, SiKeepassxc, } from "react-icons/si";
import { DiReact, DiNodejs } from "react-icons/di";

function Otherstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://nextcloud.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiNextcloud />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.mysql.com/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <SiMariadbfoundation />
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

      <ExternalLink href="https://desktop.github.com/">
        <Col xs={4} md={2} className="tech-icons">
          <DiGithubBadge />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://trello.com/">
        <Col xs={4} md={2} className="tech-icons">
          <DiTrello />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://keepassxc.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiKeepassxc />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://nodejs.org/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://fr.reactjs.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </ExternalLink>
   
    </Row>
  );
}

export default Otherstack;