// *------ I M P O R T S ------*
import ProjectCard from "./ProjectCard";
import { Col, Row } from "react-bootstrap";
// *---------------------------*

// *------ P R O J E C T S  D A T A ------*
const project1 = {
  name: 'Portfolio',
  description: 'A portfolio site',
  repoLink: 'https://github.com/AdelHasan',
  deployedLink: 'https://github.com/AdelHasan',
  techStack: 'HTML, CSS, JQuery, Bootstrap'
}

const project2 = {
  name: 'Research Launchpad',
  description: 'A react app for Google Books API',
  repoLink: 'https://github.com/AdelHasan',
  deployedLink: 'https://github.com/AdelHasan',
  techStack: 'React, Bootstrap, Async/Await'
}

const project3 = {
  name: 'GarageSale',
  description: 'An e-commerce site',
  repoLink: 'https://github.com/AdelHasan',
  deployedLink: 'https://github.com/AdelHasan',
  techStack: 'MERN Stack'
}

// *------ P R O J E C T S ------*
const Projects = () => {
  return (
    <div>
      <Row>
        <Col md className="d-flex justify-content-center">
          <ProjectCard
            name={project1.name}
            description={project1.description}
            repoLink={project1.repoLink}
            deployedLink={project1.deployedLink}
            techStack={project1.techStack} 
          />
        </Col>
        <Col md className="d-flex justify-content-center">
        <ProjectCard
            name={project2.name}
            description={project2.description}
            repoLink={project2.repoLink}
            deployedLink={project2.deployedLink}
            techStack={project2.techStack} 
          />
        </Col>
        <Col md className="d-flex justify-content-center">
        <ProjectCard
            name={project3.name}
            description={project3.description}
            repoLink={project3.repoLink}
            deployedLink={project3.deployedLink}
            techStack={project3.techStack} 
          />
        </Col>
      </Row>
    </div>
  )
}

export default Projects