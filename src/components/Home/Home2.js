import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je suis un passionné d'informatique qui est tombé dedant en voyant du haut de ces 10 ans un <b className="purple">"magnifique"</b> écran d'allumage de <b className="purple">Windows 95</b> 🤦‍♂️.
              Oui il m'en aura fallu de peu! Une question m'est alors venu à l'esprit
              <b className="purple"> "Comment ça fonctionne ?"</b>
              <br />
              <br />
              Les années qui ont suivi je m'amusais à démonter des appareils pour comprendre leur fonctionnement
              et à explorer l'informatique code, script, exploitation du cache etc...
              <br />
              <br />Puis à mes 14 ans, un ami est venu me dire :
              <br />
              <i><b className="purple">"Voila une fenétre noir avec cela tu va gére notre serveur, si tu ne fait rien d'ici 1 mois il arréter de fonctionner, bon courage!"</b></i>
              <br />
              <br />
              Une fois la panique digèrée et les manches remonté. C'était parti pour comprendre comment fonctionnait
              un serveur linux avec des services étranges comme <b className="purple"> ssh, sftp, apache2, teamspeak, ufw, et autre nom plus etrange les un que les autres</b>
              <br />
              <br />
              La mission fut accomplie avec succès, ce serveur resta <b className="purple">en ligne durant 9 ans</b> puis il périt avec les honneurs suite à une fin de renouvellement. 😌
              <br />
              <br />
              En parallèle j'ai également développé quelques compétences en
              <br />
              <i><b className="purple"> Développement web, Scripting Windows & linux, virtualisation, etc... </b></i>
              <br />
              <br />
              Une autre de mes passions est de créer des projets pour acquérir de
              <b className="purple"> nouvelles compétences. </b>
              Comme faire de la <b className="purple">traduction</b> de jeux vidéo pour <b className="purple">apprendre l'anglais</b>,
              ou bien connecter un <b className="purple">raspberry pi</b> à un panneau solaire pour le rendre <b className="purple">autonome en énergie</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/leghort"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discords.com/bio/p/medaey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mederic@cossu.xyz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
