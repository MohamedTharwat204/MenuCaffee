import img from '../assets/n.svg';
import img1 from '../assets/nav.svg';
export default function Mune() {
    return (
        <div className=" fixed flex  items-center justify-between  pl-6 md:pl-1 w-full md:mx-5 ">

            <img src={img} alt="" className='w-20 h-15  object-cover rounded-2xl' />
            <div className="navbar w-20 md:w-25   ">
                <div>
                    {/* <div className="dropdown   ">
                        
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-[#706760] rounded-box z-1 mt-3 w-52 p-2 shadow-2xl shadow-green-900 right-2 text-white ">
                            <li><a href='#Coff' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Hot Drinks</a></li>
                            <li><a href='#Cold' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Cold Drinks</a></li>
                            <li><a href='#Dess' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Desserts</a></li>
                            <li><a href='#Icecr' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Ice Cream</a></li>
                        </ul>
                    </div> */}
                    <div className="dropdown   ">
                        <div tabIndex={0} role="button" className="btn btn-ghost  hover:bg-[#706760] border-0 rounded-2xl">
                            <img src={img1} alt="" className='h-7 w-8"' />
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-[#706760] text-black rounded-box z-1 mt-3 w-52 p-2 shadow-2xl shadow-green-900 right-2 font-serif ">
                            <li>
                                <a href='#Coff' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Hot Drinks</a>
                              
                            </li>
                            <li><a href='#Cold' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Cold Drinks</a></li>
                            <li><a href='#Juic' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'> Juices</a></li>
                            <li><a href='#Dess' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Desserts</a></li>
                            <li><a href='#Icecr' className='hover:bg-[#d4e5e0a8] rounded-xl text-[14px] md:text-[16px]'>Ice Cream</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
