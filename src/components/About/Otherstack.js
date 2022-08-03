import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWordpress, DiTrello } from "react-icons/di"
import { ExternalLink } from "react-external-link";
import { SiAnsible, SiMariadbfoundation, SiNextcloud, SiKeepassxc, SiGitea } from "react-icons/si";

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

      <ExternalLink href="https://gitea.io/">
        <Col xs={4} md={2} className="tech-icons">
          <SiGitea />
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
 
    </Row>
  );
}

export default Otherstack;