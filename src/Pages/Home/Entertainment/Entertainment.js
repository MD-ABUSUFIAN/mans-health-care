import React from 'react';
import './Entertainment.css'

const Entertainment = () => {
    return (
        <div className="container">
               <h4 className="text-center  fitness-title rounded-pill  my-5">FUNNY -0^0- </h4>
               <div className="row  gx-1 entertainment-bg">
                   <div className="col-lg-6 col-md-12 col-sm-12 col-12 ps-3 entertainment-title ">
                       <h1>44 Very Funny Horror Movies To Watch Right Now</h1>
                       <h3>Because nothing goes better with fear than laughter(Sometime international,Sometimes not so mutch).</h3>

                   </div>
                   <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <img className="img-fluid ps-1 rounded enterainment-img" src={"https://hips.hearstapps.com/hmg-prod/images/mh-10-11-horror-comedy-1633972098.png?crop=0.426xw%3A0.853xh%3B0.0353xw%2C0&resize=640%3A*"} alt="" />
                   </div>

               </div>
        </div>
    );
};

export default Entertainment;