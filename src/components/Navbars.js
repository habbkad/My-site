import React from "react";
import { Navbar, Nav, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Navbars() {
  return (
    < >
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" >Home</NavLink>
            </Nav.Link>
            <Nav.Link href="#features">
              <NavLink to="/form">Features</NavLink>
            </Nav.Link>
            <Nav.Link href="#pricing" to="Form">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
