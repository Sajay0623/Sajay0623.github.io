import React from "react";
import "./About.css";



const About = () => {
  return (
    <div  >
    <div className="about-sec">
      <div className="main-about about section" id="about"    >

          <div className="about-1">
              <img className="about-img" class="home-img" src={"https://i.postimg.cc/d33fjtG1/ajay-pic.jpg"} alt="ajay" />
          </div >

          <div className="about-2">
            <h2 className="me"  id="user-detail-name" >About Me</h2>
              <p style={{textAlign:"justify"}} id="user-detail-intro" >
              I am a skilled Full Stack Web Developer. Capable of writing production-ready code using HTML, CSS, JavaScript, react, Redux, Node.js, Express.js Data Structure, and Algorithms to build single-page applications. Passionate to utilizing experience of working on projects for achieving organizational goals.
               
              </p>
          </div>

        </div>
    </div>

    </div>
   
  );
}

export default About;