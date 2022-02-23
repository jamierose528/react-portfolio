import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

<Navbar bg="light" variant="light" sticky="top">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about-me">About Me</Nav.Link>
      <Nav.Link href="#wiboo">Wiboo</Nav.Link>
      <Nav.Link href="#passport-quest">Passport Quest</Nav.Link>
      <Nav.Link href="#red-orchid">Red Orchid</Nav.Link>
    </Nav>
  </Container>
</Navbar>;

export default Navbar;
