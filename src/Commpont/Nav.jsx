import { NavLink } from 'react-router-dom';
import img from '../assets/favourite.svg';
import img2 from '../assets/home-1.svg';
import { useFavorites } from "../store";
import { useEffect, useState } from "react";


export default function Nav() {
    const { favorites } = useFavorites();
    const [cart, setCart] = useState(0)

    useEffect(() => {
        setCart(favorites.length)
    }, [favorites])


    return (
        <div className=' '>

            <div className="flex  sm:w-[50%]   justify-center  items-center  ">
                <div className="border w-[65%] md:w-[40%] bg-[#706760d5]   shadow-emerald-600  shadow-2xl   left-1/2 -translate-x-1/2   border-[#706760d3] py-1 flex justify-around items-center gap-1  h-20 rounded-2xl   md:top-2 bottom-0  mb-1 md:mb-0   fixed">
                    <NavLink to='/' end className={({ isActive }) => (isActive ? 'bg-[#d4e5e0a8] rounded-2xl  flex items-center justify-center h-16   transition-all duration-300 scale-110' : 'opacity-50')}>
                        <div className="group relative px-4 cursor-pointer">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-900 ">
                                <img src={img2} alt="" />
                            </div>
                            <span className="absolute  -bottom-10 left-[50%]  -translate-x-[50%] z-20 origin-left scale-0 rounded-lg  border border-white bg-[#706760] px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-90">
                                Home
                            </span>
                        </div>
                    </NavLink>

                    <NavLink to='/favorites' end className={({ isActive }) => (isActive ? 'bg-[#d4e5e0a8] rounded-2xl transition-all scale-110 duration-300 flex items-center justify-center h-16 w-25 ' : 'opacity-50')} >
                        <div className="group relative px-4 cursor-pointer">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-900">
                                <img src={img} alt="" />
                            </div>
                            <span className="absolute -bottom-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border  border-white bg-[#706760] px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-90">
                                Favorites
                            </span>
                            <p className='absolute bottom-6 left-14 text-black bg-white w-7 h-7 rounded-full flex items-center justify-center'>{cart}</p>
                        </div>
                    </NavLink >
                </div>
            </div>

        </div>
    )
}
