import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div as={Row} id="about">
            <Card as={Col} xs={8} className='m-4'>
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    {/* <Card.Link> */}
                        <Button as={Link} variant="warning" to="/posts">Posts</Button>
                    {/* </Card.Link> */}
                    {/* <Card.Link> */}
                        <Button className='mx-3' as={Link} variant="secondary" to="/albums">Albums</Button>
                    {/* </Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
