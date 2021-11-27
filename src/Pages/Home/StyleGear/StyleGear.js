import React from 'react';
import './StyleGear.css'

const StyleGear = () => {
    return (
        <div className="container">
            <h1 className="text-center  fitness-title rounded-pill py-3 my-5">STYLE & GEAR>></h1>
            <div className="row style-header">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 style-banner">
                    <div><img className="img-fluid style-banner" src={"https://hips.hearstapps.com/hmg-prod/images/home-office-essentials-1584815784.jpg?crop=1.00xw:1.00xh;0,0&resize=1024:*"} alt="" /></div>
                    <div className="text-center py-5">
                        <h1 className="fs-1 fw-bolder">These 27 Office Essentials Will Make Your Work-From-Home Life So Much Easier</h1>
                        <p>BY ASHLEY DAVIS AND KATIE DUPERE</p>
                    </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 pt-3">
                    <div className="row gy-2">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
                            <div className="product-image">
                                <img className=" product-image" src={"https://hips.hearstapps.com/hmg-prod/images/mh-portrait-of-black-athlete-royalty-free-image-530579868-1561406182.jpg?crop=0.700xw%3A1.00xh%3B0.152xw%2C0&resize=360%3A*"} alt="" />
                                
                            </div>
                            <div className="ps-3">
                                <h5>The 18 Best Headphones for Your Workout</h5>
                                <small>BY VANESSA POWELL AND EMILY SHIFFER</small> 
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
                            <div>
                                <img className=" product-image" src={"https://hips.hearstapps.com/hmg-prod/images/mh-10-12-bar-gifts-1634059001.png?crop=0.502xw%3A1.00xh%3B0%2C0&resize=360%3A*"} alt="" />
                            </div>
                            <div className="ps-3">
                                <h5>23 Gift Ideas for the Dude With a Home Bar</h5>
                             <small>BY MILAN POLK AND CAT WOLINSKI</small>  
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
                            <div>
                                <img className=" product-image" src={"https://hips.hearstapps.com/hmg-prod/images/everything-is-hard-before-it-is-easy-royalty-free-image-1569276219.jpg?crop=0.668xw%3A1.00xh%3B0.301xw%2C0&resize=360%3A*"} alt="" />
                            </div>
                            <div className="ps-3">
                                <h5>The 15 Best Pairs of Shorts for CrossFit</h5>
                             <small>BY EMILY SHIFFER AND BRETT WILLIAMS, NASM</small>  
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex mb-4">
                            <div>
                                <img className="product-image" src={"https://hips.hearstapps.com/hmg-prod/images/mh-10-12-bar-gifts-1634059001.png?crop=0.502xw%3A1.00xh%3B0%2C0&resize=360%3A*"} alt="" />
                            </div>
                            <div className="ps-3">
                                <h5>Shop Amazon's Secret Sale on Bose Headphones Now</h5>
                             <small>BY KELSEY MULVEY</small>  
                            </div>
                        </div>
                        
                       

                    </div>

                </div>

            </div>
        </div>
    );
};

export default StyleGear;