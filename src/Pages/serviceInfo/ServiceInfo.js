import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ServiceInfo = () => {
    const {details} = useParams();
    console.log(details);
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data =>setData(data))
    },[])

    const serviceItem = data.filter(td => td.id == details);


   
    return (
       
            <div className=" text-center container my-5">
                <h1 className="fs-1 text-white bg-primary rounded-pill p-2 w-50 mx-auto my-5">Food Details</h1>
                
        <CardGroup className="w-50 mx-auto rounded border-1">
                <Card>
                    <Card.Img variant="top" src={serviceItem[0]?.img} />
                    <Card.Body>
                    <Card.Title className="text-primary"><h2>{serviceItem[0]?.title}</h2> </Card.Title>

                    

                    <Card.Text><p>{serviceItem[0]?.description}</p> </Card.Text>
                    
                    </Card.Body>
                    
                </Card>
                
        </CardGroup>
                
            </div>
      
    );
};

export default ServiceInfo;