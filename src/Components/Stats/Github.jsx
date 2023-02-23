
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import("./Github.css");
const Github = () => {
  return (
    <div className='githead-div'>
        <h1 className="githead">
          GitHub Statistics & Calender
        </h1>



        
            <div className='calendar react-activity-calendar'>
                <GitHubCalendar
                    username="Sajay0623"
                    blockSize={22}
                    blockMargin={2}
                    width='100%'
                    color="blue"
                    fontSize={15}
                />
            </div>

            <div className='summery' >
            <img  
      alt = " Sajay0623"
        align="center"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Sajay0623&theme=github_dark" />
            </div>


           


           <div className='stats'>
            <div className='stats1'>
            <img className='img1'  id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs?username=sajay0623&show_icons=true&locale=en&layout=compact" alt="sajay0623" />
            </div>
            <div className='stats2'>
            <img className='img2' id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com/?user=sajay0623&" alt="sajay0623" />
            </div>
            <div className='stats3'>
            <img  className='img3' id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=sajay0623&show_icons=true&locale=en" alt="sajay0623" />
            </div>
            
           
            </div>

                       
        </div>



  
  )
}

export default Github