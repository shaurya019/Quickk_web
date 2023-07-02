import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavScroll.css'

function NavScroll() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container className='nav-c' bg="primary">
        <Navbar.Brand href="#home">Quickk</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='Nav_bar'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Policy">Policies</Nav.Link>
          <Nav.Link href="/Terms">Terms & Conditions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;