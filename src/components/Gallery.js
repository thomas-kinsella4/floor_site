import React from 'react'
import gallery1 from "../assets/wallysite-job1.jpg";
import gallery2 from "../assets/wallysite-job2.jpg";
import gallery3 from "../assets/wallysite-job3.jpg";

const Gallery = () => {
  return (
    <div className='text-section' id='gallery-section'>
        <div id="gallery">
            <img src={gallery1} className='gall-imgs'></img>
            <img src={gallery2} className='gall-imgs'></img>
            <img src={gallery3} className='gall-imgs'></img>
        </div>
    </div>
  )
}

export default Gallery