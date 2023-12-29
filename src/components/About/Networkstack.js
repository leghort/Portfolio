import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { SiPfsense, SiCisco, SiOpenwrt, SiOpnsense } from "react-icons/si";
import { GrAruba } from "react-icons/gr";

function Idestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://www.pfsense.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiPfsense />
      </Col>
      </ExternalLink>

      <ExternalLink href="https://fr.wikipedia.org/wiki/Cisco_IOS">
        <Col xs={4} md={2} className="tech-icons">
          <SiCisco />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://openwrt.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiOpenwrt/>
        </Col>
      </ExternalLink>

      <ExternalLink href="https://opnsense.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiOpnsense/>
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.arubanetworks.com/fr/produits/commutateurs/">
        <Col xs={4} md={2} className="tech-icons">
          <GrAruba/>
        </Col>
      </ExternalLink>

    </Row>
  );
}

export default Idestack;