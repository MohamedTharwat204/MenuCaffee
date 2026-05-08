import { useFavorites } from "../store"
import toast from "react-hot-toast";

export default function Fruitcocktailcold() {
  const Date = [
    { Name: "Mango and Strawberry", Description: "It focuses on combining the sweet tropical taste of mango with the tartness of fresh strawberries", Price: 68, img: 'https://jessicainthekitchen.com/wp-content/uploads/2023/12/Strawberry-Mango-Smoothie0279-500x500.jpg' },
    { Name: "Bananace and Chocolate", Description: "The classic rich combination of banana and chocolate", Price: 65, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYltHilurQdEJxUNaapJkmawsGRVhYg9AlWQ&s' },
    { Name: "Strawberry and Kiwi", Description: "A perfect blend of fresh strawberries and peeled kiwis", Price: 75, img: 'https://www.rebootwithjoe.com/wp-content/uploads/2014/08/strawberry-kiwi-smoothie-1.jpg' },
    { Name: 'Avocado with Honey', Description: 'Fresh avocado blended with milk or almond and coconut milk and natural honey', Price: 80, img: 'https://thumbs.dreamstime.com/b/avocado-smoothie-pistachios-drizzle-honey-plastic-cup-side-view-summer-drink-avocado-smoothie-pistachios-402102619.jpg' },
    { Name: 'Bananace with Honey and Nuts', Description: 'Banana honey and nut smoothie with its natural sweetness and rich texture is an ideal energy booster', Price: 85, img: 'https://aliarestaurant.eshopshubstging.com/media/catalog/product/cache/49323faf824737dbc29090adfbbef2da/b/a/banana_milk_honey_nuts_706_396_copy_1.jpg' },
    // { Name: '', Description: '', Price: , img: '' },
  ]
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
        <p id="coffid" className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 "> Fruit Cocktail</p>
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
