// *------ I M P O R T S ------*
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

// *---------------------------*
// *------ A P P ------*
function App() {
  return (
    <div className="App">
      <Nav />
      <Container className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
