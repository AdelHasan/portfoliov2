// *------ I M P O R T S ------*
import { Card } from "react-bootstrap";

// *------ P R O J E C T  C A R D ------*
const ProjectCard = ({name, description, repoLink, deployedLink, techStack}) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="text-center d-flex justify-content-center"
    >
      <Card.Header>{name}</Card.Header>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Technologies:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{techStack}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={repoLink}>Repo</Card.Link>
        <Card.Link href={deployedLink}>Deployed</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
