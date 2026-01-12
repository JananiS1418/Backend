import React from 'react'

const Banner = () => {
  return (
    <>
     <div className='bg-fuchsia-950 text-white p-3 h-120 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-7xl'>Joe</h1>
          <p className='text-2xl text-center'>Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. 
            in his directorial debut. The film stars Rio Raj in the titular role as well as Malavika Manoj and 
            Bhavya Trikha featuring in lead roles, whilst the plot of the film is formed around Joe's emotional journey about love. The film was released theatrically on 24 November 2023 to positive reviews from critics and completed 50 days at the box office.</p>
        </div>
        <div>
          <button className='bg-white text-black w-50 p-3 mt-5 rounded hover:bg-amber-400 hover:text-black'>View More Details</button>
        </div>
     </div>
    
    </>
  )
}

export default Banner
