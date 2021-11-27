import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-part">

        <div className="container">
            <div className="row me-auto px-2 fs-3">
                <div className="col-lg-4 col-md-12 col-12  me-auto fs-3">
                    <img className="img-fluid" src={"https://marketersmedia.com/wp-content/uploads/2019/07/Logo-mens-health.png"} alt="" />
                <h1>M@n's He@lth

                </h1>
                </div>
               

            </div>
           <div className="row me-auto py-5 px-2">
               <div className="col-lg-3 col-md-4 col-sm-6 col-12 me-auto ">
                  
                   <ul className="fs-5">
                       <li>About Men's Health</li>
                       <li>Advertise</li>
                       <li>Other Hearst Subscriptions</li>
                   </ul>
               </div>
               <div className=" col-lg-3 col-md-4 col-sm-6 col-12">
                   <ul className="fs-5">
                       <li>Newsletter</li>
                       <li>Subscribe</li>
                       <li>Media Kit</li>
                   </ul>
               </div>
               <div className="col-lg-3 col-md-4 col-sm-6 col-12">
               <ul className="fs-5">
                       <li>Customer Care</li>
                       <li>Give a Gift</li>
                      
                   </ul>
               </div>
               <div className=" col-lg-3 col-md-4 col-sm-6 col-12">
                     <ul className="fs-5">
                     <li>E-prints, Reprints</li>
                       <li>Manage Email Preferences</li>
                     </ul>
               </div>

             </div>
           </div>
           <p className="text-center py-3 fw-bold">©All Rights Reserved Ch@mok. Gmail: abusufian.programmer@gmail.com.</p>
        </div>
    );
};

export default Footer;