import React from 'react'
import { Navbar, Nav, NavDropdown, Container,Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbars() {
  return (
    <>
       <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}
