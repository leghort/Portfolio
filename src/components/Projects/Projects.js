import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import improveyoutube from "../../Assets/Projects/improveyoutube.webp";
import dauntlessbuilder from "../../Assets/Projects/dauntlessbuilder.webp";
import outilspdt from "../../Assets/Projects/outilspdt.webp";
import bind9 from "../../Assets/Projects/bind9.webp";
import dhcp from "../../Assets/Projects/dhcp.webp";
import sshKey from "../../Assets/Projects/create-ssh-key.webp";
import ansible from "../../Assets/Projects/ansible.webp";
import qemu from "../../Assets/Projects/qemu.webp";
import ipv6 from "../../Assets/Projects/ipv6.webp";
import openvpn from "../../Assets/Projects/openvpn.webp";
import squid from "../../Assets/Projects/squid.webp";
import routerLinux from "../../Assets/Projects/routerLinux.webp";

import 'reactjs-popup/dist/index.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
      <h1 className="project-heading">Mes dernier <strong className="purple">projets </strong>
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
              description="Ansible est un outils d'automatisation de déploiement et de configuration"
              link="/ansible"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openvpn}
              isBlog={false}
              title="openVpn"
              description="OpenVPN est à la fois un protocole VPN et un logiciel libre qui utilise les techniques VPN pour sécuriser les connexions point à point et site à site. Actuellement, c’est l’un des protocoles VPN les plus populaires parmi les utilisateurs VPN."
              link="/openVpn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routerLinux}
              isBlog={false}
              title="routerLinux"
              description="Comment transformer n'importe quel ordinateur en router pour votre réseau avec le système d'exploitation linux."
              link="/routerLinux"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squid}
              isBlog={false}
              title="squid"
              description="Squid est un proxy libre permettent de sécuriser et d'améliorer l'accès à certaines pages Web en les stockant en cache (ou copie)."
              link="/squid"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qemu}
              isBlog={false}
              title="QEMU"
              description="Une solution de virtualisation opensource plus rapide et mieux intégrer que virtualbox au systeme Linux."
              link="/qemu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dhcp}
              isBlog={false}
              title="DHCP linux"
              description="Service dhcp pour fournir automatiquement des adresses ip à l'ensemble des machines sur le réseau."
              link="/iscdhcp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bind9}
              isBlog={false}
              title="Dns linux"
              description="Service des résolution de nom (DNS) pour transformer les ip en nom."
              link="/bind9"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={improveyoutube}
              isBlog={false}
              title="Improve YouTube"
              description="Une extension pour améliorer l'utilisation de YouTube. Lecteur de vidéo plus grand et une interface personnalisable, rangée/cachée des élements comme les commentaire, les bouttons..."
              externalLink="https://chrome.google.com/webstore/detail/improve-youtube-video-you/bnomihfieiccainjcjblhegjgglakjdd"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dauntlessbuilder}
              isBlog={false}
              title="Dauntless Builder"
              description="Site internet fait en react, pour créer des ensemble d’équipements sur le jeu vidéo Dauntless."
              externalLink="https://dauntless-builder.fr/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipv6}
              isBlog={false}
              title="ipv6"
              description="Désactiver le successeur direct d’IPv4 a savoir le protocole IPv6 sous linux."
              link="/ipv6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sshKey}
              isBlog={false}
              title="SSH via clef"
              description="Procédure de mise en place d'une connexion ssh, via cle de chiffrement asymétrique"
              link="/ssh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outilspdt}
              isBlog={false}
              title="Outils_PDT"
              description="Une boîte à outils pour les techniciens poste de travail sous Windows, fait uniquement en script .bat ce qui permet de l'exécuter dans une invitation de commande distante. Les outils à disposition sont (Autologon, Pavé numérique au démarrage, Installer des logiciels, etc...)"
              externalLink="https://github.com/leghort/Outils_PDT" target="_blank"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

