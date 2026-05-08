import toast from "react-hot-toast";
import { useFavorites } from "../store"

export default function Dessmuno() {

  const Date = [
    { Name: 'Chocolate Lava Cake', Description: 'It is a classic French cake characterized by its rich chocolate cake and fluffy exterior', Price: 85, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnC1db0UIAdAK45DJ2Qo8-lIFQiyOpKDOoiw&s' },
    { Name: 'Nutella Lava Cake with Ice Crem Vanilla', Description: 'In cafes, it is a luxurious, warm chocolate dessert featuring a soft, fluffy cake texture on the outside and vanilla ice cream.', Price: 90, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOzDr3yhWJVtfbVGFg34_TB05Ni73hHq2mA&s' },
    { Name: 'Fudge Brownie', Description: 'Classic brownies brownies with walnuts and Oreo', Price: 75, img: 'https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?resize=720%2C720&ssl=1' },
    { Name: 'Chocolate Mousse', Description: 'A fluffy chocolate cake topped with a thick layer of velvety chocolate mousse and glossy ganache.', Price: 70, img: 'https://cdn1.foodviva.com/static-content/food-images/dessert-recipes/chocolate-mousse-eggless/chocolate-mousse-eggless.jpg' },
    { Name: 'Waffles with Ice Cream', Description: 'Waffles with ice cream offer a wonderful combination of hot, crispy waffles on the outside and fluffy on the inside.', Price: 90, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIbUukFq9tegfMKfzJzfzUJsiHMfmQDRB0A&s' },
    { Name: 'Cupcake Vanilla ', Description: 'Moist and fluffy vanilla cupcakes topped with rich buttercream frosting', Price: 35, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAbuLKBzkpl0kK9Nkxzb0JmzfHP-BPh3FnQ&s' },
    { Name: 'Cupcake Chocolate', Description: 'Moist chocolate cupcakes topped with luxurious buttercream frosting', Price: 40, img: 'https://i0.wp.com/www.zestandlemons.com/wp-content/uploads/2018/12/Gluten-Free-Chocolate-Cupcakes-with-Espresso-Ganache.1-7-of-7.jpg?resize=610%2C921&ssl=1' },
    // { Name: '', Description: '', Price: , img: '' },
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
      <p className='w-30 h-10 bg-amber-800 text-[26px] flex items-center rounded-xl pl-2 shadow-stone-700 shadow-2xl'>Desserts</p>

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
    </div>
  )
}
