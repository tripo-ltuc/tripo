import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Logout from "./Logout";
import Reviews from "./pages/Reviews";
import logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <section className="navbar-home">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img className="logo" alt="..." src={logo} />
            </Navbar.Brand>
            <Navbar.Collapse className="me-auto justify-content-end text01">
              <Nav.Link href="/">
                <Link to="/">HOME</Link>
              </Nav.Link>
              <Nav.Link href="/">
                <Link to="/">DISCOVER</Link>
              </Nav.Link>
              <Nav.Link href="/reviews">
                <Link to="/reviews">REVIEWS</Link>
              </Nav.Link>
              <Nav.Link href="/about-us">
                <Link to="/about-us">ABOUT US</Link>
              </Nav.Link>
              <NavDropdown title="PROFILE" id="nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link>
                    <Logout />
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
            {/* <Link><Logout/></Link> */}
          </Container>
        </Navbar>
      </section>
    );
  }
}

export default Header;
