import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../../Particle";
import pdf from "../../../Assets/pdf/ansible.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Ansible() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
    <Container fluid className="resume-section">
      <Particle />
      <Row className="resume">
          <Document
    file={pdf}
    onLoadSuccess={({ numPages })=>setNumPages(numPages)}
>
    {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6}/>)}
</Document>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
      </Row>
    </Container>
  </div>
  );
}

export default Ansible;