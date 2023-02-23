import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import("./Contact.css");

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1 className="con-head">Contact Me</h1>
          <p>
            Drop me a mail at <strong> <a href="mailto:sajay9885@gmail.com" className="mail-id">sajay9885@gmail.com</a></strong>
          </p>
          
          <div className="links">
            <a
              href="https://github.com/Sajay0623"
              target="_blank"
              rel="noreferrer"
            >
             
              <AiFillGithub className="fontlink"/>
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-s-611b8623a/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="fontlink"/>
              
            </a>
            <a
              href="https://twitter.com/Sajay9885"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i class="fab fa-twitter"></i> */}
              <AiFillTwitterSquare className="fontlink"/>
            </a>
          </div>

          <h4 className="copyright-text">You can clone my website | Made by Ajay</h4>
        </div>
      </div>

    </>
  );
}