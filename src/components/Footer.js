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
          <Col>
            <a href="mailto:a.hasan0495@gmail.com@gmail.com?subject=Mail from our Website">
              <i
                className="fa-solid fa-envelope fa-2xl fa-align-center"
                
              ></i>
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
