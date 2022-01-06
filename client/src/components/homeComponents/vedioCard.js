import React from 'react'

function vedioCard () {
  return (
    <div className='videoCards'>
      <h1> 更多教學影片</h1>
      <div className='videoCards_container'>
        <div className='videoCards_wrapper'>
          <ul className='videoCards_items'>
            <VideoCard 
              src="image/img-9"
              text
            />
          </ul>

        </div>
      </div>
    </div>
  )
}

export default vedioCard
