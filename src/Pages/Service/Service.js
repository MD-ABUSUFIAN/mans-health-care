import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{title,img,id,by}=service;
    console.log(id)
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center card-main mb-5">
        <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title><h2>{title}</h2> </Card.Title>
                    
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{by}</small>
                    
                    </Card.Footer>
                    <Link to={`/serviceinfo/${id}`}><button className="btn btn-warning my-2">view----More</button></Link>
                    
                </Card>
                
        </CardGroup>
                
            </div>
    );
};

export default Service;