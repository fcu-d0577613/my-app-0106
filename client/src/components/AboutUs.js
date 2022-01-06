import React from 'react';
import './AboutUs.css';


function AboutUs  ()  {
  return (
    
    <div className='about-container'>
      <div className='AboutUs'>
        <div className='aboutText'>
          <span>座落於校園北門，擁有五星級健身房、</span><br/>
          <span>專業飛輪教室、室內籃球場、羽球場、</span><br/>
          <span>國際標準50公尺游泳池、
          國際級400</span><br/>
          <span>公尺跑道等設備。</span><br/>

        </div>

        <div className='aboutPic'>
          <img className='aboutPicText'
                alt='Travel Image'
                src={'images/t1-02-02.png'}
              />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
