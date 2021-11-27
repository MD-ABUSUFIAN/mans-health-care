import React, { useEffect, useState } from 'react';
import AboutTeam from '../AboutTeam/AboutTeam';
import './About.css'

const About = () => {
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        fetch('/team.json')
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div>
            <div>
                <img className="img-fluid" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1149242306.jpg?crop=1.00xw:0.846xh;0,0.0880xh&resize=1600:*" alt="" />
                <div className="py-5 w-50 mx-auto">
                    <h1 className="banner-title">Meet the Editors of Men's Health</h1>
                    <p className="text-title"> <span className="single-w">W</span>ith 25 print editions in 35 countries and more than 21 million readers across its social and digital platforms, Men’s Health is the world’s largest men’s magazine brand, and the number one source of information for and about men. It’s the brand for active, successful, professional men who want greater control over their physical, mental, and emotional lives. We give men the tools they need to make their lives better through in-depth and expert-backed reporting, covering everything from fashion and grooming to health, nutrition, fitness, weight loss, as well as cutting-edge gear, the latest in entertainment, science, and more.

                    Every month, our editors and reporters seek the advice of the most trusted, experienced, and academically affiliated authorities in health, fitness, weight loss, relationships, and more. We also keep an eye out for the latest new research in the world’s most credible, peer-reviewed academic journals, and distill it for our readers in a way that’s practical, accessible, and easy to understand. Furthermore, every story in the print edition is subjected to a rigorous fact-checking process, in which a team of researchers thoroughly vets all factual claims for accuracy.

                    Since it launched in 1986, Men’s Health has been nominated for many of the publishing industry’s top honors, including 17 National Magazine Awards in the categories of personal service and general excellence. In 2017, Ad Age named Men’s Health one of its Magazines of the Year.</p>
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/editorial-team-title-1568993559.png?resize=768:*" alt="" />

                    <p className="my-5">Men's Health editors, reporters, and licensed experts give men the tools they need to make their lives better through in-depth, service-minded journalism. From deeply reported features to daily coverage of trends in the worlds of health and wellness, our experienced staff covers fitness, nutrition, style, grooming, technology & gear, entertainment and more.</p>
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />


                   <div className="row gy-3 rounded">

                        {
                            teams.map(team=><AboutTeam key={team.id} team={team}></AboutTeam>)

                        }




                   </div>

                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/editorial-policies-1568993788.png?resize=768:*" alt="" />
                    <h1 className="mt-5 mb-2 fw-bolder">Reporting Guidelines</h1>
                    <p>MensHealth.com asks all editors and writers to follow strict reporting protocols to ensure the accuracy of all information reported on the site. Studies must be reviewed before being cited in stories, and all factual information must be attributed to a reliable source. Editors rely on interviews with expert sources to substantiate all articles, and each story is reviewed and fact-checked by at least two editors before being published on site. Articles are then regularly reviewed and updated to include the newest information available on the topic.</p>
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />
                    <h1 className="mt-5 mb-2 fw-bolder">Affiliate Links</h1>
                    <p>MensHealth.com participates in affiliate marketing programs—meaning that purchases made by readers who visit our site and then go to retailers and products recommended by our editors may result in paid commissions. The products we feature are always chosen by editors based on brand standards.

                    </p>
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />
                    <h1 className="mt-5 mb-2 fw-bolder">About Hearst Magazines Digital Media</h1>
                    <p>Hearst Magazines Digital Media, a unit of Hearst Magazines, is home to a powerful portfolio of brands, from iconic industry-leading fashion and lifestyle properties to some of the fastest-growing voices in food and commerce. In addition to Prevention, Hearst owns several other global leaders in health and wellness, including Men's Health, Women's Health, Runner's World, Bicycling, and Netdoctor. Learn more about Hearst, Hearst Magazines, and Hearst Magazines Digital Media.</p>
                    <img className="mx-auto w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/line-break-1567526315.png?resize=768:*" alt="" />






                </div>
                
            </div>


            
        </div>
    );
};

export default About;