import React from 'react';
import HomeFitnessCard from '../HomeFitnessCard/HomeFitnessCard';
import './HomeFitness.css'

const HomeFitness = () => {
    const fitness=[
        {    
            id:1,
            title:"Eddie Hall Tests Punching Power and Breaks Machine",
            img:"https://hips.hearstapps.com/hmg-prod/images/eddie-punch-1634393990.png?crop=0.540xw%3A0.823xh%3B0%2C0.177xh&resize=360%3A*",
            description:"The strongman-turned-boxer recently demonstrated his punching power to a cheering crowd at the Arnold Sports Festival.",
            by:"BY PHILIP ELLIS"
        },
        {    
            id:2,
            title:"Push Your Workout Gains Further With Iso Holds",
            img:"https://hips.hearstapps.com/hmg-prod/images/hlh110121bodyfreezeframe-002-1634317527.jpg?crop=1.00xw%3A0.628xh%3B0%2C0.238xh&resize=360%3A*",
            description:"The classic iso hold has returned—and it’s the secret to unlocking next-level muscle and strength.",
            by:"BY LAUREN BEDOSKY"
        },
        {    
            id:3,
            title:"An Olympic Weightlifter Breaks Down Deep Squats",
            img:"https://hips.hearstapps.com/hmg-prod/images/the-best-weightlifting-exercises-royalty-free-image-1634314667.jpg?crop=0.668xw%3A1.00xh%3B0.263xw%2C0&resize=360%3A*",
            description:"Two-time Olympian Chad Vaughn joins Squat University to explain his thoughts on how low athletes should go when they",
            by:"BY BRETT WILLIAMS, NASM"
        },
        {    
            id:4,
            title:"Mark Bell Shares His Best Bench And Butterfly Press Tips",
            img:"https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-14-at-11-54-23-am-1634226880.png?crop=0.486xw%3A1.00xh%3B0.365xw%2C0&resize=360%3A*",
            description:"Legendary powerlifter Mark Bell demonstrates how he teaches the staple chest day by day hard exercise.",
            by:"BY BRETT WILLIAMS, NASM"
        },
    ]
    return (
        <div>
            <div className="container">
               <h1 className="text-center  fitness-title rounded-pill py-3 my-5">>>FITNESS</h1>
              <div className="row gy-5">
              {
                   fitness.map(fitnes=><HomeFitnessCard key={fitnes.id} fitnes={fitnes}></HomeFitnessCard>)
               }
              </div>

            </div>
        </div>
    );
};

export default HomeFitness;