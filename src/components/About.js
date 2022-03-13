// *------ I M P O R T S ------*
import { Row, Col, Card } from "react-bootstrap";
// *------ A B O U T ------*
const About = () => {
  return (
    <div className="about">
      <Row>
        <Col md className="d-flex justify-content-center">
          <Card
            style={{ width: "18rem" }}
            className="text-center d-flex justify-content-center"
          >
            <Card.Header>About Me</Card.Header>
            <Card.Img variant="top" src="https://picsum.photos/500" />
            <Card.Body>
              <Card.Title className="mb-2 text-muted">
                Full-Stack Developer
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
            </Card.Body>
          </Card>
        </Col>
        <Col md text-center>
          <h3>Current Role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            earum pariatur accusamus ipsum! Laborum et laboriosam quisquam optio
            impedit iusto, error sint illum saepe expedita minus eaque
            praesentium, quam voluptatum?
          </p>
          <h3>Background</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            earum pariatur accusamus ipsum! Laborum et laboriosam quisquam optio
            impedit iusto, error sint illum saepe expedita minus eaque
            praesentium, quam voluptatum?
          </p>
          <h3>Aspirations</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            earum pariatur accusamus ipsum! Laborum et laboriosam quisquam optio
            impedit iusto, error sint illum saepe expedita minus eaque
            praesentium, quam voluptatum?
          </p>
        </Col>
      </Row>
      
    </div>
  );
};

export default About;
