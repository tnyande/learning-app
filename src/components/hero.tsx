import Image from 'next/image'

const Hero = () => {
  return (
    <section 
  className="relative w-[1440px] h-[600px] top-[80px] opacity-0 flex gap-0"
  style={{ background: 'var(--surface-action, #01589A)' }}
>
  <div className="flex flex-1 items-center justify-center px-8">
    <div className="text-white max-w-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg">This is a description of the hero section. Customize it to fit your needs!</p>
    </div>
  </div>
  <div className="flex-1">
    <Image 
      src="/test.jpg" // Add your image path here
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
</section>

  )
}

export default Hero;