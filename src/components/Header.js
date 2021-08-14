import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import Logout from './Logout';

class Header extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Tripo</Navbar.Brand>
          <Navbar.Collapse className="me-auto justify-content-end">
            <Nav.Link ><Link to="/">HOME</Link></Nav.Link>
            <Nav.Link ><Link to="/profile">PROFILE</Link></Nav.Link>
          </Navbar.Collapse >
          <Link><Logout/></Link>
        </Navbar>
      </Container>
    );
  }
}

export default Header;