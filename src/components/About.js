// *------ I M P O R T S ------*
import { Row, Col, Card, Table } from "react-bootstrap";
// *------ A B O U T ------*
const About = () => {
  return (
    <div className="about">
      {/* <Card id="profileContainer"> */}
      <Row>
        <Col lg className="d-flex justify-content-center">
          <Card
            style={{ width: "18rem" }}
            className="text-center d-flex justify-content-center"
            id="profileCard"
          >
            <Card.Header>Adel Hasan</Card.Header>
            <Card.Img variant="top" src="https://i.imgur.com/XLHoJFp.jpg" />
            <Card.Body>
              <Card.Title className="mb-2 text-muted">
                Full Stack Developer
              </Card.Title>
              <Card.Text>Houston, Texas</Card.Text>
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
          <h3>About Me</h3>
          <p>
            Hi, I'm Adel Hasan, a software engineer based in Houston, Texas. My
            current knowledge base is focused on full-stack web development with
            JavaScript, and I am always learning more about new languages,
            libraries and frameworks. I'm a recent graduate of General
            Assembly's Software Engineering Immersive Cohort, where I learned
            full-stack web development through applied projects. I am located in
            Houston, Texas, and actively seeking opportunities to join a
            development team and put the skills and technologies I learned at
            General Assembly to work.
          </p>
          <p>
            I'm passionate about building and contributing to applications that serve valuable purposes for their users. For me being a good software engineer means constantly learning and building profiecieny in the technologies that can be used to build new, innovative and valuable software. Software that improves the lives of its users in a tangible, meaningful way. 
          </p>
        </Col>
      </Row>
      <hr/>
      <Row>
      <h3>My Tech Stack</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Category</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>Language</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td>JS Runtime Environment</td>
                <td>Intermediate</td>
              </tr>
              
              <tr>
                <td>React</td>
                <td>Front End Framework</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Express</td>
                <td>Server Side Framework</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td>Non-Relational DB</td>
                <td>Intermediate</td>
              </tr>
              
              <tr>
                <td>Mongoose</td>
                <td>ODM</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>Language</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td>Relational DB</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>Django</td>
                <td>Server Side Framework</td>
                <td>Basic</td>
              </tr>
            </tbody>
          </Table>
      </Row>
      {/* </Card> */}
    </div>
  );
};

export default About;
