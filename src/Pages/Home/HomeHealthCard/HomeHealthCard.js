import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const HomeHealthCard = ({health}) => {
  
    const {title,img}=health;
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 py-3 rounded text-center">
            <CardGroup >
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

export default HomeHealthCard;