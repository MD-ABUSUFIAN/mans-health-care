import React from 'react';
import HomeHealthCard from '../HomeHealthCard/HomeHealthCard';

const HomeHealths = () => {
    const healths=[
        {    
            id:1,
            title:"22 People on Drinking During Quarantine",
            img:"https://hips.hearstapps.com/hmg-prod/images/beautiful-young-woman-drinking-red-wine-with-royalty-free-image-1588867726.jpg?crop=0.668xw%3A1.00xh%3B0.146xw%2C0&resize=360%3A*",
            
        },
        {    
            id:2,
            title:"11 Foods Everyone With Diabetes Should Buy",
            img:"https://hips.hearstapps.com/hmg-prod/images/diabetes-foods-1539721980.jpg?crop=0.6869315461943514xw%3A1xh%3Bcenter%2Ctop&resize=360%3A*",
           
        },
        {    
            id:3,
            title:"20 Weird Symptoms to Get Checked Out",
            img:"https://hips.hearstapps.com/hmg-prod/images/empty-roll-on-toilet-paper-holder-royalty-free-image-513487312-1550002734.jpg?crop=0.665xw%3A1.00xh%3B0.335xw%2C0&resize=360%3A*",
            
        },
        {    
            id:4,
            title:"15 Best Exercises to Burn Belly Fat",
            img:"https://hips.hearstapps.com/hmg-prod/images/plank-position-for-strong-legs-back-and-abs-royalty-free-image-1568746573.jpg?crop=0.670xw%3A1.00xh%3B0.295xw%2C0&resize=360%3A*",
            
        }
    ];
    
    return (
        <div>
            <div className="container">
               <h1 className="text-center  fitness-title rounded-pill py-3 my-5"> HEALTH>>> </h1>
              <div className="row gy-5">
              {
                   healths.map(health=><HomeHealthCard key={health.id} health={health}> 
                   );</HomeHealthCard>)
               }
              </div>
            </div>
            
        </div>
    );
};

export default HomeHealths;