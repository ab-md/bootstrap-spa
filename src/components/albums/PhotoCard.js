import React from 'react';
import { Card } from 'react-bootstrap';

const Photocard = ({photo}) => {

    const width = window.innerWidth;

    return (
        <>
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={width <= 500 ? photo.thumbnailUrl : photo.url}  />
                <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </>
    );
}

export default Photocard;
