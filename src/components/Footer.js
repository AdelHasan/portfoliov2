// *------ I M P O R T S ------*
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

// *------ F O O T E R ------*
const Footer = () => {
  return (

      <Navbar bg="dark" variant="dark" className="footer-container">
        <Container className="justify-content-center">
        <Row>
          <Col>
        <a href="https://github.com/adelhasan" target="_blank">
          <i className="fa-brands fa-github fa-2xl fa-align-center"></i>
        </a>
        </Col>
        <Col>
        <a href="https://www.linkedin.com/in/adelhasan/" target="_blank">
          <i className="fa-brands fa-linkedin fa-2xl fa-align-center"></i>
        </a>
        </Col>
        </Row>
        </Container>
      </Navbar>

  );
};

export default Footer;

<Row className="footer">
  <Col className="text-end">
    <a href="https://github.com/adelhasan" target="_blank">
      <i className="fa-brands fa-github fa-2xl"></i>
    </a>
  </Col>
  <Col>
    <a href="https://www.linkedin.com/in/adelhasan/" target="_blank">
      <i className="fa-brands fa-linkedin fa-2xl"></i>
    </a>
  </Col>
</Row>;
