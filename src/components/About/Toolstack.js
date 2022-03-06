import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
import { SiLinux, SiVisualstudiocode, SiKeepassxc, SiIntellijidea } from "react-icons/si";
import { DiGithubBadge, DiTrello, DiWindows } from "react-icons/di";
import { GiAtom } from "react-icons/gi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://www.microsoft.com/fr-fr/windows">

        <Col xs={4} md={2} className="tech-icons">
          <DiWindows />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://www.debian.org/index.fr.html">
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://code.visualstudio.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
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

      <ExternalLink href="https://atom.io/">
        <Col xs={4} md={2} className="tech-icons">
          <GiAtom />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://keepassxc.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiKeepassxc />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.jetbrains.com/fr-fr/idea/">
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
      </ExternalLink>

    </Row>
  );
}

export default Toolstack;

