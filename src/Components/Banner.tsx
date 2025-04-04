import sateliteImg from "../assets/Statelight.jpg"

const Banner = () => {
    return (
        <div className="bg-black relative z-50 text-white pb-12">
            <div className="container p-10 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <img data-aos="zoom-in" src={sateliteImg} className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" alt="" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-5 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                        <p data-aos="fade-up" data-aos-delay="200" className="text-sky-800 uppercase">Our Mission</p>
                        <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl uppercase">Rapidcast</h1>
                        <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit, amet ut accusantium rem vero aliquam corrupti sapiente voluptates odio distinctio ratione ad ipsum fugiat praesentium totam? Sed, vel commodi. consectetur adipisicing elit. Quidem iste numquam, aut accusantium rem vero aliquam corrupti sapiente voluptates odio distinctio ratione ad ipsum fugiat praesentium totam? Sed, vel commodi.</p>
                        <button data-aos="fade-up" data-aos-delay="600" className="primary-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner