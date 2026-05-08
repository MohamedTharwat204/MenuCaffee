import { useFavorites } from "../store";
import toast from 'react-hot-toast';

export default function Coffee() {
  const Date = [
    { Name: "Espresso", Description: "Concentrated rich and creamy coffee", Price: 35, img: 'https://static.vecteezy.com/system/resources/thumbnails/069/180/679/small/espresso-shot-glass-cup-dark-background-cafe-beverage-free-photo.jpg' },
    { Name: "Mano coffee", Description: "The choice of mood moderate sugar authentic coffee and a taste that lasts", Price: 45, img: 'https://146892600.cdn6.editmysite.com/uploads/1/4/6/8/146892600/E7DEJXVBZEZ6YQK24BJY3WFA.jpeg?width=640&optimize=medium' },
    { Name: "Americano", Description: "A rich blend of premium espresso with hot water for a balanced flavor", Price: 65, img: 'https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg' },
    { Name: "French coffee", Description: "Cold milk espresso silky smooth", Price: 60, img: 'https://media.alimento.io/items/45/17315832122068033.jpg' },
    { Name: "Turkish coffee", Description: "A blend combining the strength of Turkish coffee with aromatic", Price: 66, img: 'https://alameedcoffee.com/uploads/2022/01/6f357ae2-9303-61efe8d28c54-1417x720.png' },
    { Name: "Spanish coffee", Description: "Dark chocolate meets bold espresso", Price: 75, img: 'https://drinksworld.com/wp-content/uploads/Spanish-Coffee-02-scaled.jpg' },
    { Name: "Macchisto", Description: "A nintense espresso shot distinguished by a light touch of creamy milk foam", Price: 73, img: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003s.jpg' },
  ];

  const { favorites, setFavorites } = useFavorites();

  const addcart = (el) => {
    let index = favorites.findIndex((pro) => pro.Name == el.Name)
    let copy = [...favorites];

    if (index == -1) {
      copy.push({ ...el, qty: 1 })
      toast.success('add is order with favorites')
    }
    setFavorites(copy)
    sessionStorage.setItem('order', JSON.stringify(copy))
    // console.log("storage:", sessionStorage.getItem('order'));
  }

  return (

    <div className='flex flex-col'>
      <p className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10"> Coffee </p>
      <div className="flex  items-center justify-center w-full">
        <div className="carousel  rounded-2xl carousel-center   max-w-xs md:min-w-[82%]  " >
          <div className='flex  gap-2 md:gap-4'>
            {Date.map((el, index) => {
              return (
                <div key={index} className='w-52 md:w-55 h-auto gap-2 bg-emerald-50 rounded-2xl p-2 flex flex-col justify-between shrink-0'>
                  <img className='rounded-2xl  object-fill w-full h-35 ' src={el.img} alt="" />
                  <div className='flex flex-col  gap-1 h-20'>
                    <h1 className='underline'>{el.Name}</h1>
                    <p className='text-[12px] text-gray-400'>{el.Description}</p>
                  </div>
                  <div className="flex  items-center justify-between ">
                    <p className='text-[16px]' >{el.Price} EGP</p>

                    <button
                      onClick={() => addcart(el)}
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300 ">

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
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
