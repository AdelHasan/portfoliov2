import ProjectCard from "./ProjectCard";
import { Col, Row } from "react-bootstrap";
// *---------------------------*
// *------ P R O J E C T S ------*
const Projects = () => {
  return (
    <div>
      <Row>
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
      </Row>
    </div>
  )
}

export default Projects