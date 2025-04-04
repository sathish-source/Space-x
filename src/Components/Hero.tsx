
import mountain from '../assets/moon.png'

const Hero = () => {
  return (
    <div className="bg-black/10 relative z-50  w-full h-full text-white">
        <div className="h-full mx-auto flex justify-center items-center p-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  gap-4">
                <div className="space-y-4 lg:pr-36">
                    <h1 data-aos="fade-up" className="text-5xl winkysans  font-bold uppercase">Orbite The Earth</h1>
                    <p data-aos="fade-up" data-aos-delay="300" >Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.</p>
                    <button data-aos="fade-up" data-aos-delay="500" className="bg-blue-500  text-white hover:bg-blue-600 px-4 py-1 duration-200">Learn More</button>
                </div>
                <div></div>
            </div>
        </div>
        <img src={mountain} alt="" className='absolute  right-0 bottom-0 w-full brightness-50 z-10'/>
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
    </div>
  )
}

export default Hero