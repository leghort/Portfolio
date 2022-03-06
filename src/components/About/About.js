import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Otherstack from "./Otherstack";
import Virtualstack from "./Virtualstack";
import Codestack from "./Codestack";
import Osstack from "./Osstack";
import Idestack from "./Idestack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        
        <h1 className="project-heading">
         Les outils et technologie que <strong className="purple">j'utilisent </strong>
        </h1>
        <br />
        <br />
        <h4 class="stack-title purple">Systéme d'explotation</h4>
        <Osstack />

        <h4 class="stack-title purple">Solution de virtualisation</h4>
        <Virtualstack />

        <h4 class="stack-title purple">Langage de programmation</h4>
        <Codestack />

        <h4 class="stack-title purple">Autre</h4>
        <Otherstack />
        <h5 class="stack-title">Environnement de développement</h5>
        <Idestack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
