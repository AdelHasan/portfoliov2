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
                  MERN Stack Developer
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              earum pariatur accusamus ipsum! Laborum et laboriosam quisquam
              optio impedit iusto, error sint illum saepe expedita minus eaque
              praesentium, quam voluptatum?
            </p>
            <h3>Background</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              earum pariatur accusamus ipsum! Laborum et laboriosam quisquam
              optio impedit iusto, error sint illum saepe expedita minus eaque
              praesentium, quam voluptatum?
            </p>
            <h3>Aspirations</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              earum pariatur accusamus ipsum! Laborum et laboriosam quisquam
              optio impedit iusto, error sint illum saepe expedita minus eaque
              praesentium, quam voluptatum?
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default About;
