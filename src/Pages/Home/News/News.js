import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const News = ({nw}) => {
    const {img,title}=nw;
    
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center card-main">
    <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title><h1>{title}</h1> </Card.Title>
                </Card.Body>
            </Card>
            
    </CardGroup>
            
        </div>
    );
};

export default News;