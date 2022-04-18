// *------ I M P O R T S ------*
import ProjectCard from "./ProjectCard";
import { Col, Row, Card } from "react-bootstrap";
// *---------------------------*

// *------ P R O J E C T S  D A T A ------*
const project1 = {
  name: "Portfolio",
  description:
    "My first project at General Assembly, a portfolio site that was my first independent project as a developer. I learned a lot about the foundations of the web, and managing my time and efforts as a developer.",
  repoLink: "https://github.com/AdelHasan/portfolio",
  deployedLink: "https://github.com/AdelHasan/portfolio",
  techStack: "HTML, CSS, JQuery, Bootstrap",
};

const project2 = {
  name: "Research Launchpad",
  description:
    "A react app for Google Books API, that allows a user to search and view previews of any title listed on Google Books. Users can also create a reading list of links to book previews, to create a short list of reading material as the starting point for forays into new topics.",
  repoLink: "https://github.com/AdelHasan/bookapp",
  deployedLink: "https://adelhasan.github.io/bookapp/",
  techStack: "React, Bootstrap, Async/Await",
};

const project3 = {
  name: "GarageSale",
  description:
    "An e-commerce site built as part of a three-developer team. This project taught me a lot about working as part of a team, managing git workflow with multiple developers, and building and deploying a full-stack web application.",
  repoLink: "https://github.com/Channel4NewsTeam-JAE/eCommerce-frontend",
  deployedLink: "https://github.com/AdelHasan",
  techStack: "MERN Stack",
};

const project4 = {
  name: "Support Desk",
  description:
    "A ticketing application that allows users to sign up and login to view and manage issue tickets for their consumer devices. This application was built using a MongoDB and Express backend, and a React/Redux Frontend. This was my most extensive project",
  repoLink: "https://github.com/AdelHasan/supportdesk",
  deployedLink: "#",
  techStack: "MERN Stack, Redux",
};

// *------ P R O J E C T S ------*
const Projects = () => {
  return (
    <div>
      <Card id="projectsContainer">
        <Row>
          <Col lg className="d-flex justify-content-center">
            <ProjectCard
              name={project4.name}
              description={project4.description}
              repoLink={project4.repoLink}
              deployedLink={project4.deployedLink}
              techStack={project4.techStack}
            />
          </Col>

          <Col lg className="d-flex justify-content-center">
            <ProjectCard
              name={project1.name}
              description={project1.description}
              repoLink={project1.repoLink}
              deployedLink={project1.deployedLink}
              techStack={project1.techStack}
            />
          </Col>
          <Col lg className="d-flex justify-content-center">
            <ProjectCard
              name={project2.name}
              description={project2.description}
              repoLink={project2.repoLink}
              deployedLink={project2.deployedLink}
              techStack={project2.techStack}
            />
          </Col>
          <Col lg className="d-flex justify-content-center">
            <ProjectCard
              name={project3.name}
              description={project3.description}
              repoLink={project3.repoLink}
              deployedLink={project3.deployedLink}
              techStack={project3.techStack}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Projects;
