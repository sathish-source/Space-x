import Logo from '../assets/logoo.png'

const Navbar = () => {
  return (
    <div data-aos="fade-down" className='fixed  top-0 right-0  w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
    <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <div className="flex items-center p-2 font-bold text-2xl text-white">
                 <img src={Logo} alt="logo" className='w-10 ' />
                 <span>SPACE-ZXS</span>
            </div>
            <div className='text-white hidden md:block'>
                <ul className='flex items-center space-x-15 text-xl py-4'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Galaxy</a></li>
                    <li><a href="#">Satelite</a></li>
                </ul>
            </div>
            <div className='text-white border-2 border-white hover:text-black hover:bg-white px-3 py-1 rounded-md'>
                <button>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar