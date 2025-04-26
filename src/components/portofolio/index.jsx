import React from 'react'
import port1 from "/port1.png";
import port2 from "/port2.png";
import port3 from "/port3.png";
import port4 from "/port4.png";
import port5 from "/port5.png";
import port6 from "/port6.png";

function Portfolio() {
    const images = [
        {id: 1, img: port1},
        {id: 2, img: port2},
        {id: 3, img: port3},
        {id: 4, img: port4},
        {id: 5, img: port5},
        {id: 6, img: port6},
    ]
  return (
    <div id="portfolio" className='w-[90%] scroll-mt-20 mb-[100px] mx-auto'>
        <h2 className='text-center capitalize font-semibold mb-6 text-5xl'>Our portfolio</h2>
        <div className='flex justify-between gap-y-3 flex-wrap'>
            {images.map(img=><img key={img.id} src={img.img} className='w-[100%] md:w-[48%] lg:w-[32.5%] hover:scale-[102%] transition duration-200' alt='portfolio image'/>)}
        </div>
    </div>
  )
}

export default Portfolio;
