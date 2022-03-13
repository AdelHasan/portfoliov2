// *------ I M P O R T S ------*
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// *------ N A V ------*
const nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#about"><Link to="/" className="head-link" id="brand">Adel Hasan</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="head-link">
              <Nav.Link  href="#about" >About</Nav.Link>
            </Link>
            <Link to="/projects" className="head-link">
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default nav;