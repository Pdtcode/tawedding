import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='https://lh5.googleusercontent.com/d/1e_jNw9OukSfkcP17_0-SQWcyLgISO_uc'
          alt='Photographer'
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="bg-white p-6 max-w-lg text-center rounded-lg">
          <h1 className="text-2xl mb-2">About Me</h1>
          <p className="text-lg">
            Hello, my name is Devin Ta, and I am a Vietnamese-American photographer based in Oklahoma City, Oklahoma. I enjoy taking portraits, creative photos, as well as concert photos!
          </p>
        </div>
      </div>
    </div>
  );
}
