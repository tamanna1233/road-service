import React from 'react'

const Gallery = () => {
  return (
    <>
        <div className=''>
        <div className='text-yellow-300 text-center py-4 text-lg sm:text-2xl md:text-4xl font-imprint'>Gallery</div>
        <div className='flex justify-center py-4'>
          <div className='grid grid-cols-2 sm:grid-cols-4 text-white gap-x-4 gap-y-8 px-8 sm:px-40'>
            
                <div >
                  <img
                    src='../assets/Gallery/DSC_2028.JPG'
                    alt=''
                    className='hover:cursor-pointer hover:scale-105 h-auto w-full transition-transform duration-300 '
                    width="300" 
                    height="200"
                  />
                </div>
           
          </div>
        </div>
      </div>
    </>
      
    
  )
}

export default Gallery
