import React from 'react';
import { Carousel } from 'react-bootstrap';
import HomeHealths from '../Home/HomeHealth/HomeHealths';

const Health = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/medical-tech-science-innovative-iot-global-healthcare-ai-technology-picture-id1298626492?b=1&k=20&m=1298626492&s=170667a&w=0&h=gKFiFmLzM-jXK3IGgRHoBoP7dlRK1AecT8w1ivLGBSU="
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
                        src="https://media.istockphoto.com/photos/healthy-eating-exercising-weight-and-blood-pressure-control-picture-id1280587810?b=1&k=20&m=1280587810&s=170667a&w=0&h=TGA2jWHjaLHAUlNLpjkeVPhUXoufX-S4yxBRIvwMYdI="
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
                        src="https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0="
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
                <HomeHealths></HomeHealths>
        </div>
    );
};

export default Health;