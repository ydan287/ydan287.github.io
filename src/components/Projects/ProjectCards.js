import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
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
