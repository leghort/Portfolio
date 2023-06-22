import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import markdownFile from "../../../Assets/markdown/ansible.md";
import DOMPurify from "dompurify";
import { remark } from "remark";
import remarkHtml from "remark-html";

function Ansible() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        remark()
          .use(remarkHtml)
          .process(text)
          .then((output) => {
            setHtmlContent(DOMPurify.sanitize(output.toString()));
          });
      });
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div
            className="markdown-wrapper"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Ansible;