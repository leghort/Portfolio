import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.externalLink ? <Button href={props.externalLink ? props.externalLink : props.link}><BiLinkExternal/>{"Plus"}</Button> : <Link to={props.link}><Button>{"Plus"}</Button></Link>}
      </Card.Body>
    </Card>
  );}

  export default ProjectCards;
