import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vonageLogo from "../../Assets/Vonage.jpeg"
import LQFILogo from "../../Assets/LQFI.jpeg"
import personalLogo from "../../Assets/logo.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              logo={vonageLogo}
              title="App for inner business communication"
              description="A Web and Electron application written in Vue.js and Node.js, Enabling businesses to find communication solutions for a variety of needs including messaging, video calls, voice over ip calls etc..."
              techStack={["devicon-vuejs-plain colored", "devicon-electron-original colored", "devicon-typescript-plain colored", "devicon-amazonwebservices-plain-wordmark colored", "devicon-mongodb-plain-wordmark colored", "devicon-jenkins-plain colored"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Asset Management"
              logo={LQFILogo}
              description="Developed a product that was in charge of allocating and liquidating crypto-assets between different crypto wallets, bank accounts, and cryptocurrency exchange accounts. The frontend of the product was written with React and the backend with Typescript."
              techStack={["devicon-react-original-wordmark colored", "devicon-express-original", "devicon-typescript-plain colored", "devicon-amazonwebservices-plain-wordmark colored", "devicon-mongodb-plain-wordmark colored", "devicon-nestjs-plain colored"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Data Feed"
              logo={LQFILogo}
              description="Developed a data accessabilty product. The product was used to collect data from variuos cryptocurrency exchanges. The data was aggregated to other services and to diffrent databases in order to be queried and used for backtesting."
              techStack={["devicon-typescript-plain colored", "devicon-amazonwebservices-plain-wordmark colored", "devicon-apachekafka-original-wordmark", "devicon-docker-plain colored", "devicon-terraform-plain-wordmark colored"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Cryptocurrency Trading Platform"
              logo={LQFILogo}
              description="Designed and developed a cryptocurrency trading platform. The platform was written mainly in Rust. The stack included Typescript, Node, AWS(ECS+S3+EC2) , RabbitMQ"
              techStack={["devicon-typescript-plain colored", "devicon-rust-plain", "devicon-docker-plain colored"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Future Contracts Trading platform"
              logo={personalLogo}
              description="Developed a platform that automates trading strategies. The platform is integrated with an American broker and can be used to deploy strategies on NYSE, Nasdaq, and CME."
              techStack={["devicon-typescript-plain colored", "devicon-python-plain colored", "devicon-prometheus-original colored"]}
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
