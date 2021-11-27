import React from 'react';
import Entertainment from '../Entertainment/Entertainment';
import FoodDiet from '../FoodDiet/FoodDiet';
import HomeFitness from '../HomeFitness/HomeFitness';
import HomeHealths from '../HomeHealth/HomeHealths';
import HomeSlider from '../HomeSlider/HomeSlider';
import LatestNews from '../LatestNews/LatestNews';
import StyleGear from '../StyleGear/StyleGear';

const Home = () => {
    return (
        <div>
        
            <HomeSlider></HomeSlider>
            <HomeFitness></HomeFitness>
            <HomeHealths></HomeHealths>
            <FoodDiet></FoodDiet>
            <Entertainment></Entertainment>
            <StyleGear></StyleGear>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;