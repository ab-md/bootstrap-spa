import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-secondary">
            <Container>
                <Navbar expand="md">
                    <Navbar.Brand className='mx-auto'>2022 &copy; Designed by react-bootstrap</Navbar.Brand>
                </Navbar>
            </Container>
        </div>
    );
}

export default Footer;
