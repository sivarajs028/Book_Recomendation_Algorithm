import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="#"><strong>SmartReadsML</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Top50" style={{ textDecoration: 'none', color: 'black' }}>Top50</Link>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sivaraj-s-023396259" target='_blank'>
              Let's Connect!
            </Nav.Link>
          </Nav>
          
          {/* Removed Login and Signup buttons */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
