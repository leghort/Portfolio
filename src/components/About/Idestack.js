import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { SiVisualstudiocode, SiIntellijidea, SiGitpod, SiPycharm, SiSublimetext } from "react-icons/si";
import { GiAtom } from "react-icons/gi";

function Idestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://code.visualstudio.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://atom.io/">
        <Col xs={4} md={2} className="tech-icons">
          <GiAtom />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://www.sublimetext.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiSublimetext />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://www.jetbrains.com/fr-fr/idea/">
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://www.jetbrains.com/fr-fr/pycharm/">
        <Col xs={4} md={2} className="tech-icons">
          <SiPycharm />
        </Col>
      </ExternalLink>
      <ExternalLink href="https://www.gitpod.io/">
        <Col xs={4} md={2} className="tech-icons">
          <SiGitpod />
        </Col>
      </ExternalLink>
    </Row>
  );
}

export default Idestack;