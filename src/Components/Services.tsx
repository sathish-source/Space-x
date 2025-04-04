import { FaReact } from "react-icons/fa"
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6"
import bggif from "../assets/wave.gif"

const ServiceData =[
    {
        title: "HST",
        content: "300-1500km",
        description:
        "Using for astronomical observations capturing stunning images of the universe",
        icon:<FaReact className="text-7xl"/>,
        aosDelay:"300"
    },
    {
        title: "ISS",
        content: "500-1500km",
        description:
        "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon:<FaShuttleSpace className="text-7xl"/>,
        aosDelay:"500"
    },
    {
        title: "GPS",
        content: "300-1500km",
        description:
        "Part of the Global Positioning System (GPS) used for navigation.Satellite orbiting Earth",
        icon:<FaSpaceAwesome className="text-7xl"/>,
        aosDelay:"700"
    }
]
const Services = () => {
  return (
    <div className="bg-black relative z-50 text-white">
        <div className="container mx-auto p-[2rem]">
            <div className="min-h-[400px]">
                <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3 relative z-10   ">
                   {
                    ServiceData.map((data) => (
                           <div data-aos='fade-up' data-aos-delay={data.aosDelay} className="min-h[180px] flex flex-col justify-center items-center rounded-xl  bg-sky-900/60 backdrop-blur-sm  text-center text-2xl py-10 px-5 w-full lg:w-[300px] mx-auto ">
                            {data.icon}
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                            <p className="text-sm">{data.description}</p>
                           </div> 
                        )
                    )
                   }
                </div>
                <img src={bggif} alt=""
                className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24  relative z-[0] " />
            </div>
        </div>
    </div>
  )
}

export default Services