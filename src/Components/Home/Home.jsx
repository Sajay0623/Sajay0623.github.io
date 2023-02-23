//import img from "./hemant.jpeg";
import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
//import ReactDOM from 'react-dom/client';
import "./Home.css";
import Resume from "./Ajay_Sahu_Resume.pdf"

const Home=()=>{
  return (

    <div id="home" class="nav-link home"  >

      {/* <img src="https://img.freepik.com/free-vector/web-development-concept-website-optimization-web-page-interface-design-coding-testing-site-internet-modern-technology-idea-isolated-flat-vector-illustration_613284-2551.jpg?w=740&t=st=1676631067~exp=1676631667~hmac=4ddf62e2a6f794ecbee71bd4842850b007dfca2da5b9a8fe93248537970da49a" alt="" /> */}
      <div className="name">
        <h1 className='text-color'>Hi there</h1>
		    <h1 className='text-color' id="user-detail-name" >I am Ajay sahu</h1>
          <h1>
              <Typewriter
                className='auto-type'
                options={{
                  strings: [
                      "A Full Stack Web Developer.",
                      "A Problem Solver.",
                  ],
                   autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
          </h1>
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button  
          id="resume-button-1" className='portButton'>Resume<BiDownload className="download"/></button>
        </a>
      </div>
      <div>
        <img src={'https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966'} alt="ajay" />
      </div>
    </div>
  );
}
export default Home;

