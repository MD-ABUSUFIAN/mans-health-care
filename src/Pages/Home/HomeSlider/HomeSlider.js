import React from 'react';
import './HomeSlide.css'
import { Carousel } from 'react-bootstrap';

const HomeSlider = () => {
    return (
        <div>
        <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod/images/man-exercising-with-medicine-ball-in-the-gym-royalty-free-image-1629738492.jpg?crop=0.657xw%3A0.493xh%3B0.144xw%2C0.252xh&resize=640%3A*"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>Men's Health reader</h3>
                        <p>Get bigger biceps, triceps, and shoulders with this muscle-building exercise plan..</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod/images/office-hfw-min-1631807599.jpg?crop=1.00xw%3A0.334xh%3B0%2C0.268xh&resize=640%3A*"
                        alt="Second slide"
                        />

                    <Carousel.Caption>
                        <h3>LAUREN LARSON</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod/images/hlh110121feacover-001-min-1633620756.png?crop=0.998xw%3A0.334xh%3B0.00160xw%2C0.257xh&resize=640%3A*"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>MH TEND</h3>
                            <p>Homing From Work: Back But Better</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                <div className="container">
                    <div className="text-center my-3 py-5 slide-under-text">
                    <h1 className="fw-bolder fs-1">Therabody’s Recovery Boots Are the Perfect Way to End Leg Day</h1>
                    <h3>Whether you’re a hardcore gym-goer or casual user, RecoveryAir has a perfect option.</h3>
                    <small>BY EBENEZER SAMUEL, C.S.C.S. OCT 13, 2021</small>
                    </div>

                </div>
        </div>
    );
};

export default HomeSlider;