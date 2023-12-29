import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
import { SiDebian, SiAlpinelinux } from "react-icons/si";
import { DiWindows, DiRasberryPi } from "react-icons/di";
import { GrArchlinux } from "react-icons/gr";

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
          <SiDebian />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://www.alpinelinux.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiAlpinelinux />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://archlinux.fr/">
        <Col xs={4} md={2} className="tech-icons">
          <GrArchlinux />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">
        <Col xs={4} md={2} className="tech-icons">
          <DiRasberryPi />
        </Col>
      </ExternalLink>
       
    </Row>
  );
}

export default Toolstack;