

import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AboutTeam = ({team}) => {
    const {img,title,description}=team;
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center card-main">
        <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title><h1>{title}</h1> </Card.Title>
                    <Card.Text>
                        <h5>{description.slice(50,150)}</h5>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
        </CardGroup>
                
            </div>
    );
};

export default AboutTeam;