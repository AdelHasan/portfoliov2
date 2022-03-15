// *------ I M P O R T S ------*
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// *------ N A V ------*
const nav = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand>Adel Hasan</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/portfoliov2" className="head-link">
              <Nav.Link  href="#about" >About</Nav.Link>
            </Link>
            <Link to="/portfoliov2/projects" className="head-link">
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Link>
            <Link to="/portfoliov2/resume" className="head-link">
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default nav;
