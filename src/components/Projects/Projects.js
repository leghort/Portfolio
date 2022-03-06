import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import improveyoutube from "../../Assets/Projects/improveyoutube.png";
import dauntlessbuilder from "../../Assets/Projects/dauntlessbuilder.png";
import outilspdt from "../../Assets/Projects/outilspdt.png";
import bind9 from "../../Assets/Projects/bind9.png";
import dhcp from "../../Assets/Projects/dhcp.jpeg";
import sshKey from "../../Assets/Projects/create-ssh-key.png";
import ansible from "../../Assets/Projects/ansible.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          Mes dernier <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Les projets sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ansible}
            isBlog={false}
            title="Ansible"
            description="Ansible l'outils d'automatisation de deployment et de configuration"
            link="https://leghort.github.io/assets/ansible-20220228.html"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={sshKey}
            isBlog={false}
            title="SSH via clef"
            description="Procédure de mise en place d'une connexion ssh, via cle de chiffrement asyméttrique"
            link="https://leghort.github.io/assets/sshParClefs-20211209.html"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={dhcp}
            isBlog={false}
            title="DHCP linux"
            description="Mise en place d'un serveur dhcp sous linux"
            link="https://leghort.github.io/assets/iscDhcp-20211211.html"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bind9}
            isBlog={false}
            title="Dns linux"
            description="Mise en place d'un serveur dns sous linux avec l'outils bind 9"
            link="https://leghort.github.io/assets/bind9Dns-20211016.html"
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={improveyoutube}
              isBlog={false}
              title="Improve YouTube"
              description="C’est une extension pour améliorer votre expérience YouTube. Un lecteur plus grand et une interface utilisateur personnalisable, rangée/cacher des élements."
              link="https://github.com/code4charity/YouTube-Extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dauntlessbuilder}
              isBlog={false}
              title="Dauntless Builder"
              description="Un outil sous la forme d’un site internet programmer en react, qui permet de créer des ensemble d’équipements pour le jeu vidéo Dauntless et de les partager simplement."
              link="https://dauntless-builder.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outilspdt}
              isBlog={false}
              title="Outils_PDT"
              description="Une boîte à outils pour les techniciens poste de travail sous Windows, fait uniquement en script .bat ce qui permet de l'exécuter dans une invitation de commande distante. Les outils à disposition sont (Autologon, Pavé numérique au démarrage, Installer des logiciels, etc...)"
              link="https://github.com/leghort/Outils_PDT"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
