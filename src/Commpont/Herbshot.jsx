import { i } from "framer-motion/client";
import { useFavorites } from "../store"
import toast from "react-hot-toast";

export default function Herbs() {
    const Date = [
        { Name: "Tea", Description: "Warm black tea", Price: 20, img: 'https://www.health.com/thmb/nR9GUnvG9ZXyT2l4yy8LgXw1nEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-2193878302-904ec3a8db834ef6bdd31f8ea0793085.png' },
        { Name: "Green tea with Mint ", Description: "A refreshing blend of premium green tea leaves", Price: 30, img: 'https://puerhcraft.com/cdn/shop/articles/peppermint-tea_f303fe08-4411-4a43-8f67-db483e381be7.jpg?v=1751369295' },
        { Name: "Mint", Description: "A warm cup combines the benefits of mint and peace of mind", Price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmuWpoNT29EA5wm5Zmapyqa1hkK4Vd0qA72nZ4xXDJA&s' },
        { Name: "Anise", Description: "A warm cup of natural anise soothes the nerves and clears the mind", Price: 20, img: 'https://herbal.recipes/wp-content/uploads/2026/02/star-anise-tea-1024x683.webp' },
        { Name: "Herbal cocktail", Description: "A harmonious blend of the finest natural herbs carefully selected  comfort and your mind is clarity", Price: 35, img: 'https://www.liquor.com/thmb/9wR7qh0NRHs9FJa2k8ewB8_gLWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jack-o-lantern-punch-720x720-primary-b22f4e9f39ff4b65980940caa1e2eb26.jpg' },
        { Name: "Hot cider", Description: "Natural apple juice carefully warmed with cinnamon sticks and star anise to soothe your senses", Price: 45, img: 'https://www.faithfullyglutenfree.com/wp-content/uploads/2014/12/Apple-Cider-0806.jpg' },
        { Name: "Hot lemon", Description: "Fresh lemon served hot to boost your immunity and give you an immediate feeling of comfort", Price: 20, img: 'https://eleanorsdish.com/wp-content/uploads/Ginger-Cinnamon-Lemon-Tea-Recipe-closeup.jpg' },
        // { Name: "", Description: "", Price: , img: '' },
    ]
    const {favorites,setFavorites}=useFavorites();
    const addcart=(el)=>{
        let data=favorites.findIndex((pro)=>pro.Name==el.Name);
        let copy=[...favorites]
        if(data==-1){
            copy.push({...el,qty:1})
            toast.success("add is order with favorites")

        }
        setFavorites(copy)
        sessionStorage.setItem('order',JSON.stringify(copy))

    }
    return (
        <div >
            <div className='flex flex-col'>
                <p className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 ">Herbs</p>
                <div className="flex  items-center justify-center w-full">
                    <div className="carousel  rounded-2xl carousel-center   max-w-xs md:min-w-[82%]  " >
                        <div className='flex  gap-2 md:gap-4'>
                            {Date.map((el, index) => {
                                return (
                                    <div key={index} className='w-52 md:w-55 h-auto gap-2 bg-emerald-50 rounded-2xl p-2 flex flex-col justify-between shrink-0'>
                                        <img className='rounded-2xl  object-fill w-full h-35 ' src={el.img} alt="" />
                                        <div className='flex flex-col  gap-1 h-22 md:h-19'>
                                            <h1 className='underline'>{el.Name}</h1>
                                            <p className='text-[12px] text-gray-400'>{el.Description}</p>
                                        </div>
                                        <div className="flex  items-center justify-between ">
                                            <p className='text-[16px]' >{el.Price} EGP</p>

                                            <button
                                            onClick={()=>addcart(el)}
                                                title="Add New"
                                                className="group cursor-pointer outline-none hover:rotate-90 duration-300 "
                                            >

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="50px"
                                                    height="50px"
                                                    viewBox="0 0 24 24"
                                                    className="stroke-zinc-400 fill-none w-10 h-10 md:w-auto md:h-auto group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                                                >
                                                    <path
                                                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                    ></path>
                                                    <path d="M8 12H16" strokeWidth="1.5"></path>
                                                    <path d="M12 16V8" strokeWidth="1.5"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
