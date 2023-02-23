
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import("./Github.css");
const Github = () => {
  return (
    <div className='githead-div'>
        <h1 className="githead">
          GitHub Statistics & Calender
        </h1>



        
            <div className='calendar'>
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


            {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=Sajay0623)](https://git.io/streak-stats) */}


           <div className='stats'>
            <div className='stats1'>
            <img className='img1' src="https://github-readme-stats.vercel.app/api/top-langs?username=Sajay0623&show_icons=true&locale=en&layout=compact" alt="Sajay0623" />
            </div>
            <div className='stats2'>
            <img className='img2'  src="https://github-readme-streak-stats.herokuapp.com/?user=Sajay0623&" alt="Sajay0623" />
            </div>
            <div className='stats3'>
            <img  className='img3' src="https://github-readme-stats.vercel.app/api?username=Sajay0623&show_icons=true&locale=en" alt="Sajay0623" />
            </div>
            {/* <div className='stats4' >
            <img className='img4'
      alt = " Sajay0623"
        align="center"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Sajay0623&theme=github_dark" />
            </div> */}
           
            </div>

                       
        </div>



  
  )
}

export default Github