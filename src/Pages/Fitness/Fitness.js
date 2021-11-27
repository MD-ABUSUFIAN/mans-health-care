import React from 'react';
import { Carousel } from 'react-bootstrap';
import HomeFitness from '../Home/HomeFitness/HomeFitness';

const Fitness = () => {
    return (
        <div className="mb-5">
        <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-portrait-of-black-athlete-royalty-free-image-530579868-1561406182.jpg?crop=0.901xw:0.649xh;0.0337xw,0.00462xh&resize=980:*"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3> Men's Health reader</h3>
                        <p>Get bigger biceps, triceps, and shoulders with this muscle-building exercise plan..</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/everything-is-hard-before-it-is-easy-royalty-free-image-1569276219.jpg?crop=1.00xw:0.752xh;0,0.108xh&resize=980:*"
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
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unknown-1-1634223792.jpeg?resize=768:*"
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
                <HomeFitness></HomeFitness>
        </div>
    );
};

export default Fitness;