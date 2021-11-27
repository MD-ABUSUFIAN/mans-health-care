import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const FoodDietCard = ({foodDiet}) => {
    const {title,img,description,by}=foodDiet;
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center card-main">
    <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title><h1>{title}</h1> </Card.Title>
                <Card.Text>
                    <h5>{description}</h5>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{by}</small>
                </Card.Footer>
            </Card>
            
    </CardGroup>
            
        </div>
    );
};

export default FoodDietCard;