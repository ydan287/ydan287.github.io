import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaAws, FaDocker, FaNode, FaRust, FaVuejs } from "react-icons/fa";
import {
  
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNode title="NodeJs"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRust title="Rust"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="Typescript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs title="VueJs" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws title="AWS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker title="Docker"/>
      </Col>
    </Row>
  );
}

export default Techstack;
