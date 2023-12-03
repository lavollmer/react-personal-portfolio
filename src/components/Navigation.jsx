import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Navlink from "react-bootstrap/esm/Navlink";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          Laura Vollmer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
            <Link to="/Resume" className="nav-link">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
