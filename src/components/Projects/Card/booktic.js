import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import zip from "../../../Assets/booktic/booktic.zip";
import Button from "react-bootstrap/Button";
import planReseau from "../../../Assets/booktic/planReseau.png";

function Booktic() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Projet <strong className="purple">booktic</strong>
            </h1>

            <p style={{ textAlign: "justify" }}>
              <p>L'entreprise <span className="purple">booktic</span> est un groupe d'établissements
              d’éditions informatique, implanté partout en France depuis 1994 (Lille, Rennes, Bordeaux, Marseille, Lyon, Strasbourg).
              Chacun de ces sites possède un réseau informatique connecté à Internet.
              Tous les sites sont reliés entre eux par des liaisons WAN.
              </p>

              
            <br />
          </p>
          </Col>
        </Row>
        <Col
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img">
            <img src={planReseau} alt="home pic" className="img-fluid" />
        </Col>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={zip} target="_blank">
            <AiOutlineDownload />
            &nbsp;Télécharger les fichiers
          </Button>
          </Row>
      </Container>
    </Container>
  );
}

export default Booktic;