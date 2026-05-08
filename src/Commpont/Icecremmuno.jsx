import { useFavorites } from "../store"
import toast from 'react-hot-toast';

export default function Icecremmuno() {
  const Date = [
    { Name: 'Ice Cream Vanilla', Description: 'Polo ice cream Vanilla offer a rich experience for dessert lovers', Price: 25, img: 'https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-vanilla-ice-cream-with-chocolate-sauce-png-image_13101780.png' },
    { Name: 'Ice Cream Chocolate', Description: 'Polo ice cream Chocolate offer a rich experience for dessert lovers', Price: 30, img: 'https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b9a3ebb4-258c-4d74-a386-eff79251f598.jpg' },
    { Name: 'Ice Cream Strawberry', Description: 'Polo ice cream Strawberry offer a rich experience for dessert lovers', Price: 35, img: 'https://i.ytimg.com/vi/FyFIWZoTf94/sddefault.jpg' },
    { Name: 'Ice Cream Mango', Description: 'Polo ice cream Mango offer a rich experience for dessert lovers', Price: 30, img: 'https://i.ytimg.com/vi/PAsWy9Grtss/mqdefault.jpg' },
    { Name: 'Oreo Ice Cream', Description: 'Polo ice cream  Oreo offer a rich experience for dessert lovers', Price: 45, img: 'https://i.ytimg.com/vi/iLoYl4xML80/mqdefault.jpg' },
    { Name: 'Lotus Ice Cream', Description: 'Polo ice cream  Lotus offer a rich experience for dessert lovers', Price: 35, img: 'https://portal.elsupplier.com/backend/public/storage/products/lotuscopy1031507704.png' },
    // { Name: '', Description: '', Price: , img: '' },
  ]
     const {favorites,setFavorites}=useFavorites();
    const addel=(el)=>{
      let index=favorites.findIndex((pro)=>pro.Name==el.Name)
      let copy=[...favorites]
      if(index==-1){
        copy.push({...el,qty:1})
        toast.success('add is order with favorites')
      }
      sessionStorage.setItem('order',JSON.stringify(copy))
      setFavorites(copy)
    }
  return (
    <div className=" flex flex-col gap-4">
      <p className='w-35 h-10 bg-pink-500 text-[26px] flex items-center rounded-xl pl-2 shadow-stone-700 shadow-2xl'>Ice Cream</p>
      {/* <p className="text-[18px] font-light underline-offset-8 underline p-4"> Polo ice cream for 25 pounds</p> */}
      <div className="w-full flex items-center justify-center">
        <div className="overflow-hidden whitespace-nowrap  py-4 w-[68%] md:w-[50%] h-16 rounded-2xl">
                <div className="animate-marquee inline-block  text-2xl text-black">
                    {/* ☕ Coffee &nbsp;&nbsp;&nbsp;
                    🍰 Desserts &nbsp;&nbsp;&nbsp;
                    🥤 Fresh Juice &nbsp;&nbsp;&nbsp;
                    Ice Cream */}
                 🍦  20% discount on three scoops of ice cream &nbsp;&nbsp;&nbsp;


                 
                </div>
            </div>
      </div>
      
      <div className='flex flex-col'>
           
        <div className="flex  items-center justify-center w-full">
          <div className="carousel  rounded-2xl carousel-center   max-w-xs md:min-w-[82%]  " >
            <div className='flex  gap-2 md:gap-4'>
              {Date.map((el, index) => {
                return (
                  <div key={index} className='w-52 md:w-55 h-auto gap-2 bg-emerald-50 rounded-2xl p-2 flex flex-col justify-between shrink-0'>
                    <img className='rounded-2xl  object-fill w-full h-35 ' src={el.img} alt="" />
                    <div className='flex flex-col  gap-1 h-26 md:h-23 '>
                      <h1 className='underline text-[14px]'>{el.Name}</h1>
                      <p className='text-[12px] text-gray-400'>{el.Description}</p>
                    </div>
                    <div className="flex  items-center justify-between ">
                      <p className='text-[16px]' >{el.Price} EGP</p>

                      <button
                      onClick={()=>addel(el)}
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
