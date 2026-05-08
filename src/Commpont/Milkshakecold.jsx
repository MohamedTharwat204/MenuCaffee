import { useFavorites } from "../store"
import toast from 'react-hot-toast';

export default function Milkshakecold() {


  const Date = [
    { Name: "Vanilla", Description: "It is prepared by combining rich vanilla ice cream with fresh juice", Price: 70, img: 'https://cdn.foodfaithfitness.com/uploads/2024/05/Vanilla-Milkshake-A_FFF_Vanilla-Milkshake_Featured_9.jpg' },
    { Name: "Millshke Strawberry", Description: "A cool and refreshing creamy drink, combining the sweetness of fresh strawberries or sauce", Price: 75, img: 'https://www.orchidsandsweettea.com/wp-content/uploads/2022/04/Insanely-Good-Strawberry-Milkshake-Dairy-Free.jpg' },
    { Name: "Chocolate", Description: "Rich chocolate ice cream mixed with milk served with whipped cream and chocolate pieces", Price: 70, img: 'https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/04/chocolate-milkshake-no-ice-cream-2.jpg' },
    { Name: "Caramel", Description: "Vanilla ice cream whole milk and a generous amount of caramel sauce", Price: 70, img: 'https://cookienameddesire.com/wp-content/uploads/2019/07/salted-caramel-milkshake-3.jpg' },
    { Name: "Nutella", Description: "A thick creamy drink made from vanilla ice cream milk and a generous amount of Nutella", Price: 75, img: 'https://saltandbaker.com/wp-content/uploads/2022/05/Nutella-milkshake-recipe.jpg' },
    { Name: "Lotus", Description: "It is a cold drink that combines the rich taste of caramelized Lotus biscuits and the famous Lotus spread", Price: 75, img: 'https://freshcoasteats.com/wp-content/uploads/2022/03/biscoff-milkshake-1.jpg' },
    { Name: "Oreo", Description: "A cold creamy and rich drink that combines luxurious vanilla ice cream and crushed Oreo cookies", Price: 75, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzvArK5wUf9FfTvWRpBcewlGBnjz-PYXqLw&s' },
    { Name: "Snickers", Description: "A creamy and rich cold drink a perfect blend for chocolate lovers combining the taste of Snickers bars", Price: 80, img: 'https://yummynotes.net/wp-content/uploads/2022/02/Snickers-Milkshake-Recipe-1.jpg' },
    { Name: "Kinder", Description: "Where creamy vanilla ice cream is blended with cold milk and signature Kinder Bueno chocolate pieces", Price: 80, img: 'https://mymorningmocha.com/wp-content/uploads/2023/07/kinder-bueno-milkshake-recipe.jpg' },
    // { Name: "", Description: "", Price: , img: '' },
  ]
  const { favorites, setFavorites } = useFavorites();
  const addel = (el) => {
    let index = favorites.findIndex((pro) => pro.Name == el.Name)
    let copy = [...favorites]
    if (index == -1) {
      copy.push({ ...el, qty: 1 })
      toast.success('add is order with favorites')
    }
    sessionStorage.setItem('order', JSON.stringify(copy))
    setFavorites(copy)
  }
  return (
    <div>
      <div className='flex flex-col'>
        <p id="coffid" className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 "> Milkshake</p>
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
                        onClick={() => addel(el)}
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
