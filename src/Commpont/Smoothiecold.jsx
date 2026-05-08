import { useFavorites } from "../store"
import toast from "react-hot-toast";

export default function Smoothiecold() {
  const Date = [
    { Name: "Smooth Strawberry", Description: "Strawberry smoothie with fresh pieces", Price: 60, img: 'https://foodsharingvegan.com/wp-content/uploads/2022/03/Strawberry-Yogurt-Smoothie-Plant-Based-on-a-Budget-1-2.jpg' },
    { Name: "Smooth Pineapple", Description: "From a fresh pineapple smoothie", Price: 70, img: 'https://www.thespruceeats.com/thmb/mJUeNrCBspxReUpy8qenaY4qSwM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pineapple-smoothie-4174395-hero-images-4-90f2a7e529c342509398d6607ffe282e.jpg' },
    { Name: "Smooth lemon with Mint", Description: "Experience ultimate refreshment with our natural lemon and mint smoothie", Price: 55, img: 'https://i.pinimg.com/originals/d2/5d/e7/d25de76c0a035ef6eb3785411a905986.jpg' },
    { Name: "Smooth Chocolate", Description: "Vanilla soft serve ice cream with chocolate sauce", Price: 65, img: 'https://www.dishingdelish.com/wp-content/uploads/2016/01/Chocolate-Chip-Mocha-Breakfast-Smoothie-5-2.jpg' },
    { Name: "Smooth Oreo", Description: "It is a rich and indulgent iced drink prepared by mixing Oreo cookies", Price: 68, img: 'https://d3s8tbcesxr4jm.cloudfront.net/recipe-images/v3/oreo-milkshake/3_medium.jpg' },
    { Name: "Smooth Kiwi", Description: "The natural sweetness of the fruit and the distinctive tartness of kiwi", Price: 67, img: 'https://thegreenloot.com/wp-content/uploads/2018/03/vegan-kiwi-spinach-smoothie-4.jpg' },
    { Name: "Strawberry and Banana", Description: "An irresistible classic harmony A perfect blend of fresh strawberries and creamy bananas", Price: 74, img: 'https://www.liveeatlearn.com/wp-content/uploads/2019/07/strawberry-banana-smoothie-vert1200.jpg' },
    { Name: "Carrot and Orange", Description: "Start your day with a natural dose of energy and vitality", Price: 70, img: 'https://i.ytimg.com/vi/zccsW0djAXw/maxresdefault.jpg' },
    // { Name: "", Description: "", Price: , img: '' },
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
    <div>
      <div className='flex flex-col'>
        <p id="coffid" className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 "> Smoothie</p>
        <div className="flex  items-center justify-center w-full">
          <div className="carousel  rounded-2xl carousel-center   max-w-xs md:min-w-[82%]  " >
            <div className='flex  gap-2 md:gap-4'>
              {Date.map((el, index) => {
                return (
                  <div key={index} className='w-52 md:w-55 h-auto gap-2 bg-emerald-50 rounded-2xl p-2 flex flex-col justify-between shrink-0'>
                    <img className='rounded-2xl  object-fill w-full h-35 ' src={el.img} alt="" />
                    <div className='flex flex-col  gap-1 h-22 md:h-21'>
                      <h1 className='underline'>{el.Name}</h1>
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


    </div>)
}
