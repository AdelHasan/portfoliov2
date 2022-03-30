// *------ I M P O R T S ------*
import { Row, Col, Card } from "react-bootstrap";
// *------ A B O U T ------*
const About = () => {
  return (
    <div className="about">
      <Card id="profileContainer">
        <Row>
          <Col lg className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className="text-center d-flex justify-content-center"
              id="profileCard"
            >
              <Card.Header>About Me</Card.Header>
              <Card.Img variant="top" src="https://picsum.photos/500" />
              <Card.Body>
                <Card.Title className="mb-2 text-muted">
                  Full Stack Developer
                </Card.Title>
                <Card.Text>Houston, Texas, US</Card.Text>
                <Card.Link href="#">
                  <a href="https://github.com/adelhasan" target="_blank">
                    <i
                      className="fa-brands fa-github fa-2xl fa-align-center"
                      id="aboutGH"
                    ></i>
                  </a>
                </Card.Link>
                <Card.Link href="#">
                  <a
                    href="https://www.linkedin.com/in/adelhasan/"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-linkedin fa-2xl fa-align-center"
                      id="aboutLI"
                    ></i>
                  </a>
                </Card.Link>
                <Card.Link href="#">
                  <a href="mailto:a.hasan0495@gmail.com@gmail.com?subject=Mail from our Website">
                    <i
                      className="fa-solid fa-envelope fa-2xl fa-align-center"
                      id="aboutMail"
                    ></i>
                  </a>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg text-center id="summary">
            <h3>Current Role</h3>
            <p>
              Graduate of General Assembly's Software Engineering Immersive Cohort, where I learned full-stack web development through applied projects.

              I am located in Houston, Texas, and actively seeking opportunities to join a development team and put the skills and technologies I learned at General Assembly to work.
            </p>
            <h3>Languages, Libraries and Frameworks</h3>
            <p>
              <ul>
                <li>Javascript, ReactJS, NodeJS</li>
                <li>ExpressJS, MongooseJS, MongoDB</li>
                <li>Python, Django, PostresQL</li>
              </ul>
            </p>
            <h3>Aspirations</h3>
            <p>
              After building my foundational knowledge of full-stack web development, I am eager to apply these skills at an enterprise level as part of a diverse team of talented developers. I consider myself a lifelong learner and I look forward to continuing this learning as part of a great development team.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default About;
