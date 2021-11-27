import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bSUyMCUyMHNlcnZpY2VzJTIwaGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        alt="First slide"
                        />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMCUyMHNlcnZpY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        alt="Second slide"
                        />

                   
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGd5bSUyMCUyMHNlcnZpY2VzJTIwaGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        alt="Third slide"
                        />

                       
                </Carousel.Item>
            </Carousel>
                <div className="container">
                    <div className="text-center my-3 py-5 slide-under-text">
                    <h1 className="fw-bolder fs-1">Therabody’s Recovery Boots Are the Perfect Way to End Leg Day</h1>
                    <h3>Whether you’re a hardcore gym-goer or casual user, RecoveryAir has a perfect option.</h3>
                    <small>BY EBENEZER SAMUEL, C.S.C.S. OCT 13, 2021</small>
                    </div>

                </div>


            
             <div className="row gy-3">
                {
                    services?.map(service=><Service key={service.id} service={service}></Service> )
                }

            </div>
        </div>
    );
};

export default Services;






// 