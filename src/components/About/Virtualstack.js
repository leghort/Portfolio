import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
import { DiDocker } from "react-icons/di";
import { SiVagrant, SiVirtualbox, SiVmware, SiQemu } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://www.virtualbox.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiVirtualbox />
        </Col>
      </ExternalLink>
      
      <ExternalLink href="https://www.vmware.com/fr/products/workstation-pro.html">
        <Col xs={4} md={2} className="tech-icons">
          <SiVmware />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://fr.wikipedia.org/wiki/Hyper-V">
        <Col xs={4} md={2} className="tech-icons">
          <TiVendorMicrosoft />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.docker.com/">
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.vagrantup.com/">
        <Col xs={4} md={2} className="tech-icons">
          <SiVagrant />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.qemu.org/">
        <Col xs={4} md={2} className="tech-icons">
          <SiQemu />
        </Col>
      </ExternalLink>

    </Row>
  );
}

export default Toolstack;

