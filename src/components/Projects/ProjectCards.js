import React from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "../../style.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="project-card-title">
          {props.logo ? <img class={"project-card-logo"} alt="logo" src={props.logo}/>: <div></div>}
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

      </Card.Body>
      <Card.Footer>
        {(props.techStack || []).map(classname => <i class={`${classname} display-6 m-2`}></i>)}
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
