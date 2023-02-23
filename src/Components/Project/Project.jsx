import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiChakraui} from 'react-icons/si'
 
 
 

import("./Project.css");



export default function Proj(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div id="project" className="proj">
      <h1 className="h14">My Recent Projects</h1>

      <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px" , width: "100%"}} alt="divider" />

      <div className="projCont" id="projects">

      <div className="project-card project-title">


          <div className="img">
            <img src="https://i.postimg.cc/fy5mNpTS/meanbuy.jpg" alt="meanbuy" />
          </div>


          <div>
            <h2 style={{fontSize:"20px"}}>Meanbuy.com</h2>
            <p class="project-description" >
            This is an largest E-commerce site where customers can sell and buy their products from any where in the world.
            </p>


            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
                                             
            </div>
            <div className="buttons">
              <a
                href="https://snazzy-naiad-622c57.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/rohit1469/puffy-umbrella-7608"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

        <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px"}} alt="divider" />

            {/* ----------------------------------- */}
              <div className="project-card .project-title">
              <div className="img">
            <img src="https://i.postimg.cc/R0n7HgG2/Explore-Up.jpg" alt="Travelocity" />
          </div>

          <div>
            <h2 style={{fontSize:"20px"}}>Travelocity.com</h2>
            <p class="project-description" >
            Travelocity.com is an online travel agency owned by Expedia Group. It has 12.4 million monthly unique visitors, making it the third most popular website.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>Json-Server</p>
              </div>
           
              
            </div>
            <div className="buttons">
              <a
                href="https://admirable-arithmetic-e1de52.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/gyan2501/abandoned-transport-7963"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>


        </div>


        <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px"}} alt="divider" />

        {/* ----------------------------------- */}

         <div className="project-card project-title">
          <div className="img">
            <img src="https://i.postimg.cc/QNqp19kN/SnapDeal.jpg" alt="SnapDeal" />
          </div>
          
  
          <div>
            <h2 style={{fontSize:"20px"}}>Snapdeal.com</h2>
            <p class="project-description" >
            Snapdeal is an Indian e-commerce company, this is one of the largest online marketplaces in India.Snapdeal targets the value e-commerce segment, which Bahl estimated to be three times larger than the branded goods market. 
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div> 
               <div>
                 <SiChakraui className='techfont'/> 
                 <p>Chakra UI</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://lambent-biscochitos-f96aab.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Sajay0623/Snapdeal_Clone"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

      
       <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px"}} alt="divider" />
 {/* ----------------------------------- */}
        <div className="project-card project-title">

          <div className="img">
            <img src="https://i.postimg.cc/xTTLRftv/fitme.jpg" alt="Jefit" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>Jefit.com</h2>
            <p class="project-description" >
            Jefit can perform various functions such as allowing users to set fitness goals, tracking caloric intake, gathering workout ideas, and sharing progress on social media to facilitate healthy behavior change.
              
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div> 
              <div>
                 <SiChakraui className='techfont'/> 
                 <p>Chakra UI</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://eclectic-bienenstitch-0fdea6.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Sajay0623/illustrious-approval-2646"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>


        </div> 
        
        {/* ----------------------------------- */}
        <img src="https://media.tenor.com/PykA8MgJn2wAAAAC/divider.gif" style = {{height:"3px"}} alt="divider" />

       
      </div>
    </div>
  );
}