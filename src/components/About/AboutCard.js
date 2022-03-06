import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Cossu Médéric </span> informaticien
            <br />
            j’habite en <span className="purple"> Seine-et-Marne, France. </span>
            Actuellement en formation BTS Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux
            <br />
            <br />
            En dehors de l'informatique, j'aime aussi
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>
          <footer className="blockquote-footer">"Un problème sans solution est un problème mal posé."</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
