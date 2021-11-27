import React from 'react';
import FoodDietCard from '../FoodDietCard/FoodDietCard';

const FoodDiet = () => {
    const foodDiets=[
        {    
            id:1,
            title:"Sweet. Sour. Spicy. Awesome. THIS Is Chinese Food.",
            img:"https://hips.hearstapps.com/hmg-prod/images/hlh090121feachinesefood-012-1629829094.jpg?crop=0.682xw%3A1.00xh%3B0.0903xw%2C0&resize=360%3A*",
            description:"CHINESE FOOD IN AMERICA has a long history of being associated with cheap and hearty takeout. Platters of chop suey dressed and sugar-glazed chicken are the classic heavyweights of Chinese American cuisine",
            by:"BY CLARISSA WEI AUG 26, 2021"
        },
        {    
            id:2,
            title:"Ryan Hall Shares 6 Eating Tips Before a Big Race",
            img:"https://hips.hearstapps.com/hmg-prod/images/ryan-hall-1631540401.png?crop=1.00xw%3A0.994xh%3B0%2C0&resize=360%3A*",
            description:"Ryan Hall has pivoted to strength training since retiring from pro running in 2016, but is still the fastest American runner of all time who holds the best time in the country in the full and half marathon. ",
            by:"BY PHILIP ELLIS SEP 13, 2021"
        },
        {    
            id:3,
            title:"The High-Protein Huevos Rancheros You Must Try",
            img:"https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-10-08-at-9-21-17-am-1633699297.png?crop=0.645xw%3A1.00xh%3B0.267xw%2C0&resize=360%3A*",
            description:"If you're more of an scrambled-eggs-bacon-toast person, I get it. It's tough to beat the traditional American diner breakfast. But there's something that old standby lacks.",
            by:"BY PAUL KITA OCT 8, 2021"
        },
        {    
            id:4,
            title:"Tom Brady's Smoothie Is, Of Course, Awesome Courses",
            img:"https://hips.hearstapps.com/hmg-prod/images/mh-mvp-brady-smoothie-1632149582.jpg?crop=0.439xw%3A0.878xh%3B0.542xw%2C0.0513xh&resize=360%3A*",
            description:"ONE OF MY highlights, of which there are few, as a Cincinnati Bengals fan goes back to their 2013 home game against the Tom-Brady-led New England Patriots.",
            by:" BY PAUL KITA SEP 16, 2021"
        },
    ]
    return (
        <div>
            <div>
            <div className="container">
               <h1 className="text-center  fitness-title rounded-pill py-3 my-5">>>>FOOD & DIET</h1>
              <div className="row gy-5">
              {
                   foodDiets.map(foodDiet=><FoodDietCard key={foodDiet.id} foodDiet={foodDiet}> 
                   );</FoodDietCard>)
               }
              </div>
            </div>
            
        </div>
        </div>
    );
};

export default FoodDiet;