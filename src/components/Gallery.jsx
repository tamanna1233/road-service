import React from 'react'
import image from '../assets/fast-delivery.png'
const Gallery = () => {
  return (
    <>
        <section name="Gallery" className=''>
                <h2 className="text-4xl font-bold mb-6 text-center mx-auto">Gallery</h2>
        
        <div className='flex justify-center py-4'>
          <div className=''>
            
                <div className='grid grid-cols-2 sm:grid-cols-4 text-white gap-x-4 gap-y-8 px-8 sm:px-40' >
                  <img
                    src={image}
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                   <img
                    src={image}
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                   <img
                    src={image}
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                   <img
                    src={image}
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                   <img
                    src={image}
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                </div>
           
          </div>
        </div>
      </section>
    </>
      
    
  )
}

export default Gallery
