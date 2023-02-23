import React from "react";
import "./About.css";



const About = () => {
  return (
    <div id="about">
    <div className="about-sec">
      <div className="main-about">

          <div className="about-1">
              <img className="about-img" src={"https://i.postimg.cc/d33fjtG1/ajay-pic.jpg"} alt="ajay" />
          </div >

          <div className="about-2">
            <h2 className="me">About Me</h2>
              <p style={{textAlign:"justify"}} >
              I am a skilled Full Stack Web Developer. Capable of writing production-ready code using MERN Stack to build single-page applications. Passionate to utilizing experience of working on projects for achieving organizational goals.
              </p>
          </div>

        </div>
    </div>

    </div>
   
  );
}

export default About;