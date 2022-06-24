import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pfp.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaChessKnight, FaSnowboarding } from "react-icons/fa";
import { GiJourney } from "react-icons/gi"
import { RiParentFill } from "react-icons/ri"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a freelance developer with experience developing software solutions from design to production.
              <br />
              <br />Extensive knowledge in
              <i>
                <b className="green"> Full-Stack web applications.</b>
              </i>
              <br />
              <br />
              Graduated  from Technion - Israel Institute of Technology. I have been developing web applications and software services for over four years. I love solving algorithmic problems, coding challenges and optimization issues.
              &nbsp;

              <br />
              <br />
              My goal is to sharpen my technological skills and gain knowledge and experience by working and interacting with top talent engineers and product experts.
              <br />
              <br />
              Aside from coding, I also enjoy:
            </p>
            <ul>
              <li className="about-activity">
                <FaChessKnight /> Playing board games
              </li>
              <li className="about-activity">
                <FaSnowboarding /> Snowboarding
              </li>
              <li className="about-activity">
                <GiJourney /> Travelling
              </li>
              <li className="about-activity">
                <RiParentFill /> Parenting
              </li>
            </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b className="green"> OPEN</b> to new projects</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ydan287"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yoav-danieli/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yoav.danieli91@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
