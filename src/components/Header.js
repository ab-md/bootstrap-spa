import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">SPA Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/">Home</NavLink>
                            <NavLink href="#about">About Us</NavLink>
                            <NavLink as={Link} to="/posts">Posts</NavLink>
                            <NavLink as={Link} to="/users">Users</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;