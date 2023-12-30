import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../../Assets/pdf/veilleTechnologique.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
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

export default ResumeNew;