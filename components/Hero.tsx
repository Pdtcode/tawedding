import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 h-full w-full object-cover z-0"
          src="https://assets.website-files.com/64e0bdf99003f08ece9cb8ec/64e4086d6d1aa9ba1c448369_wedding-transcode.webm"
        />
        <div className="absolute inset-0 bg-amber-900/35 z-10"></div>
        <div className="relative mb-64 z-20">
          <Image 
            src='/talogo.png'
            width={500}
            height={500}
            alt="logo"
          />
        </div>
      </div>
  )
}

export default Hero