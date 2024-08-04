import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
        <video 
          autoPlay 
          muted 
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
          src="/tabgvid.webm"
        />
        <div className="absolute inset-0 bg-amber-900/35 z-10"></div>
        <div className="relative mb-64 z-20">
          <Image 
            src='/talogo.png'
            width={200}
            height={200}
            alt="logo"
          />
        </div>
      </div>
  )
}

export default Hero