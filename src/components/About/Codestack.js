import React from "react";
import { Col, Row } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
import { DiPython, DiRuby, DiHtml5, DiJava, DiCss3 } from "react-icons/di";
import { SiJavascript, SiGnubash } from "react-icons/si";
import { DiReact, DiNodejs } from "react-icons/di";
import { VscTerminalCmd, VscTerminalBash } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <ExternalLink href="https://www.python.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.ruby-lang.org/fr/">
        <Col xs={4} md={2} className="tech-icons">
          <DiRuby />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://whatwg.org/">
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://developer.mozilla.org/fr/docs/Web/CSS">
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.oracle.com/java/">
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://www.oracle.com/java/">
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
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

      <ExternalLink href="https://fr.wikipedia.org/wiki/.bat">
        <Col xs={4} md={2} className="tech-icons">
          <VscTerminalCmd />
        </Col>
      </ExternalLink>

      <ExternalLink href="https://fr.wikipedia.org/wiki/Script_shell">
        <Col xs={4} md={2} className="tech-icons">
          <SiGnubash />
        </Col>
      </ExternalLink>

    </Row>
  );
}

export default Toolstack;

