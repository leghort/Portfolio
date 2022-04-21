import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import improveyoutube from "../../Assets/Projects/improveyoutube.webp";
import dauntlessbuilder from "../../Assets/Projects/dauntlessbuilder.webp";
import outilspdt from "../../Assets/Projects/outilspdt.webp";
import bind9 from "../../Assets/Projects/bind9.webp";
import dhcp from "../../Assets/Projects/iscdhcp.webp";
import sshKey from "../../Assets/Projects/create-ssh-key.webp";
import ansible from "../../Assets/Projects/ansible.webp";
import qemu from "../../Assets/Projects/qemu.webp";
import ipv6 from "../../Assets/Projects/ipv6.webp";
import openvpn from "../../Assets/Projects/openvpn.webp";
import squid from "../../Assets/Projects/squid.webp";
import routerLinux from "../../Assets/Projects/routerLinux.webp";
import zabbix from "../../Assets/Projects/zabbix.webp";
import mail from "../../Assets/Projects/mail.webp";
import routageintervlan from "../../Assets/Projects/routageintervlan.webp";
import lamp from "../../Assets/Projects/lamp.webp";
import clusterRouterHsrp from "../../Assets/Projects/clusterRouterHsrp.webp";



import 'reactjs-popup/dist/index.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
      <h1 className="project-heading">Mes dernier <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clusterRouterHsrp}
              isBlog={false}
              title="ClusterRouterHsrp"
              description="Hot Standby Router Protocol (HSRP) est un protocole propriétaire de Cisco implémenté sur les routeurs et les commutateurs de niveau 3 permettant une continuité de service en cas de panne d'un routeur un autre prendra le relay."
              link="/clusterRouterHsrp"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lamp}
              isBlog={false}
              title="Serveur LAMP"
              description="Serveur web - LAMP. LAMP est un acronyme pour Linux, Apache, MySQL, PHP. C'est une pile logicielle comprenant le système d'exploitation, un serveur HTTP, un système de gestion de bases de données et un langage de programmation interprété, et qui permet de mettre en place un serveur web."
              link="/lamp"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routageintervlan}
              isBlog={false}
              title="Routage Inter Vlan"
              description="Chaque VLAN est un domaine de broadcast unique. Les ordinateurs sur des VLAN séparés sont, par défaut, incapables de communiquer. Pour autoriser une communication entre vlan, il faut faire du routage inter-VLAN. Ce routage est faisable avec un périphérique de couche 3. Par exemple un routeur.
              Le switch est un périphérique de couche 2."
              link="/routageintervlan"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Serveur Mail"
              description="Création d'un serveur pour la réception et l’envoi d’emails au travers d’un serveur IMAP / SMTP basé sur Postfix et Couriel-imap, logiciel libre pour auto hébergement son propre serveur email."
              link="/mail"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zabbix}
              isBlog={false}
              title="Zabbix"
              description="Solution de supervision professionnelle libre de droit.Ce logiciel supervise de nombreux paramètres d'un réseau ainsi que la santé et l'intégrité des serveurs. Zabbix proposent un systeme de notifications qui permet aux utilisateurs de configurer une alerte e-mail pour pratiquement tous les événements. "
              link="/zabbix"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ansible}
              isBlog={false}
              title="Ansible"
              description="Outil Open Source d'automatisation informatique qui automatise le provisionnement, la gestion des configurations, le déploiement des applications, l'orchestration et bien d'autres processus informatiques manuels."
              link="/ansible"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openvpn}
              isBlog={false}
              title="OpenVPN"
              description="Protocole VPN et logiciel libre qui utilise les techniques VPN pour sécuriser les connexions point à point et site à site. Actuellement, c’est l’un des protocoles VPN les plus populaires parmi les utilisateurs VPN."
              link="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={routerLinux}
              isBlog={false}
              title="RouterLinux"
              description="Comment transformer n'importe quel ordinateur en router pour votre réseau avec le système d'exploitation linux."
              link="/routerLinux"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squid}
              isBlog={false}
              title="Squid"
              description="Proxy libre permettent de sécuriser et d'améliorer l'accès à certaines pages Web en les stockant en cache (ou copie)."
              link="/project"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qemu}
              isBlog={false}
              title="QEMU"
              description="Logiciel libre de machine virtuelle, pouvant émuler un processeur et plus généralement une architecture différente ou non."
              link="/qemu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dhcp}
              isBlog={false}
              title="ISC DHCP"
              description="Est une implémentation Open Source du protocole DHCP qui délivre des adresses IP aux équipements qui se connectent sur le réseau. En effet, la plupart du temps, les cartes réseaux de ces équipement sont en attente d'une adresse IP leur permettant de communiquer sur le réseau."
              link="/iscdhcp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bind9}
              isBlog={false}
              title="Bind 9"
              description="Serveur de résolution de nom (DNS) le plus utilisé sur Internet, spécialement sur les systèmes de type UNIX et est devenu de facto un standard."
              link="/bind9"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={improveyoutube}
              isBlog={false}
              title="Improve YouTube"
              description="Extension pour améliorer l'utilisation de YouTube. Lecteur de vidéo plus grand et une interface personnalisable, rangée/cachée des élements comme les commentaire, les bouttons..."
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
              title="IPV6"
              description="Successeur direct du protocole IPv4 (protocole réseau sans connexion de la couche 3 du modèle OSI), l'IPv6 est une raiponse raisonnablement à la problématique du nombres maximum d'adresse ip pouvant être distribué."
              link="/ipv6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sshKey}
              isBlog={false}
              title="SSH via clef"
              description="Procédure de mise en place d'une connexion ssh, via cle de chiffrement asymétrique"
              link="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outilspdt}
              isBlog={false}
              title="Outils PDT"
              description="Boîte à outils pour les techniciens bureautique sous Windows, fait uniquement en script .bat ce qui permet de l'exécuter dans une invitation de commande distante. Les outils à disposition sont (Autologon, Pavé numérique au démarrage, Installer des logiciels, etc...)"
              externalLink="https://github.com/leghort/Outils_PDT" target="_blank"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

