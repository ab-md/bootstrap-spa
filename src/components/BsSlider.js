import React from 'react';
import { Carousel } from 'react-bootstrap';
import airpod from '../assets/images/airpods.jpg';
import camera from '../assets/images/camera.jpg';
import alexa from '../assets/images/alexa.jpg';

const BsSlider = () => {
    return (
        <div>
            <Carousel fade variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={airpod}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={alexa}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BsSlider;
