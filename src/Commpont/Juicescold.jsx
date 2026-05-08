import toast from "react-hot-toast";
import { useFavorites } from "../store"

export default function Juicescold() {
  const Date = [
    { Name: "Orange", Description: "Natural orange juice", Price: 45, img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/orange-juice-732x549-thumbnail.jpg' },
    { Name: "Mango", Description: "Concentrated natural juices made from fresh mangoes", Price: 50, img: 'https://myfoodstory.com/wp-content/uploads/2024/05/Mango-Juice-4-500x500.jpg' },
    { Name: "Strawberry", Description: "Pure strawberry juice", Price: 55, img: 'https://img.freepik.com/free-photo/frozen-strawberry-daiquiri-cocktail-isolated-white-background_123827-30358.jpg?semt=ais_hybrid&w=740&q=80' },
    { Name: "Guava", Description: "Fresh and refreshing guava juice", Price: 45, img: 'https://classicbakes.com/sites/default/files/styles/og_image_1200/public/2022-04/homemade-fresh-guava-juice.jpg?itok=3BONUFNA' },
    { Name: "Banana with Milk", Description: "A classic drink with a smooth creamy texture made from ripe bananas and fresh milk", Price: 60, img: 'https://img.freepik.com/free-vector/glass-banana-smoothie-with-slice-straw-realistic-composition-with-bunch-unpeeled-fruit-green-leaf-vector-illustration_1284-77033.jpg?semt=ais_hybrid&w=740&q=80' },
    { Name: "Pomegranate", Description: "Pomegranate juices and natural drinks", Price: 55, img: 'https://www.padhuskitchen.com/wp-content/uploads/2015/01/pomegranatejuice-1.jpg' },
    { Name: "Pineapple", Description: "Fresh pineapple is juiced and served inside a whole pineapple fruit", Price: 67, img: 'https://pallibangla.com/wp-content/uploads/2024/06/pineapple-juice-1-600x450.jpg' },
    { Name: "lemon", Description: "Refreshing tangy and perfect", Price: 35, img: 'https://steviala.com/wp-content/uploads/2020/04/lime.jpg' },
    { Name: "lemon with Mint", Description: "Lemon and mint drink is a basic and refreshing beverage", Price: 55, img: 'https://static.toiimg.com/photo/53629795.cms' },
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
        <p id="coffid" className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 "> Juice</p>
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
