import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Un passionné </span> d'informatique qui exerce <span className="purple"> en Île-de-France.</span><br />
             actuellement en formation BTS SIO - Administration des systèmes et des réseaux 
            <br />
            <br />
            J'aime aussi
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Les Jeux-Vidéo multijoueurs
            </li>
          </ul>
          <footer className="blockquote-footer">"Un problème sans solution est un problème mal posé."</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
