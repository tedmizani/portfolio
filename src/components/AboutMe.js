import React from "react";
import author from "../Tohid.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hi. I am Tohid. I have been developing websites for over 2 years. I'm front-end Web Developer. 

            I create responsive websites that are displayed on all devices desktops and smartphones.
            
            And I’m ready to do this for you, before we start developing your website, we will discuss all the  details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.

            All this is necessary to give your customers something that your competitors do not provide, or to present it too, but better!

            After the website is finished and ready to deploy and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
