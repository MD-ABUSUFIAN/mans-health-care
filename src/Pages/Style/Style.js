import React from 'react';
import { Carousel } from 'react-bootstrap';
import StyleGear from '../Home/StyleGear/StyleGear';

const Style = () => {
    return (
        <div>
             <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/strong-man-lifting-weight-at-gym-picture-id1149242897?b=1&k=20&m=1149242897&s=170667a&w=0&h=FYpjsCgZGsYhirJQreqF6POBmsfwGC3hAW4KDCmStxA="
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
                        src="https://media.istockphoto.com/photos/bodybuilder-showing-his-well-trained-body-picture-id1248630238?b=1&k=20&m=1248630238&s=170667a&w=0&h=JaedT9noXhD9ILjfK9esCq8eFcWpjH0_dwC3DsNA7Mo="
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
                        src="https://media.istockphoto.com/photos/hardcore-body-building-workout-picture-id615284982?b=1&k=20&m=615284982&s=170667a&w=0&h=v2kAx95ItlaM_af-da2DaCzWMO-j-Iad5IUSjWeuKgs="
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
                <StyleGear></StyleGear>
        </div>
    );
};

export default Style;