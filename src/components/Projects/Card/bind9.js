import React from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../../../Assets/pdf/bind9.pdf";

function pdfEmbed() {
  return (
    <div>
    <Container fluid className="resume-section">
      <Row className="resume">
        <object 
        style={{ justifyContent: "center", position: "relative"}}
        width="80%"
        height="4600"
        data={pdf}
        type="application/pdf">
      </object>
      </Row>
    </Container>
  </div>
  );
}
export default pdfEmbed;