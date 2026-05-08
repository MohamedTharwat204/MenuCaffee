import toast from 'react-hot-toast';
import { useFavorites } from "../store"

export default function Coldcoffee() {
    const Date = [
        { Name: "Iced Coffee", Description: "A refreshing and perfect blend combining the strong taste of coffee with distinctive additions like chocolate", Price: 55, img: 'https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg' },
        { Name: "Iced Americano", Description: "Classic espresso roast now even better with ice", Price: 58, img: 'https://www.acouplecooks.com/wp-content/uploads/2022/01/Iced-Americano-008s.jpg' },
        { Name: "Iced Latte", Description: "Strong espresso shots and cold milk served over ice cubes", Price: 60, img: 'https://www.cafedumonde.co.uk/media/o3gkzmuy/iced-latte.png?width=540&height=540&v=1dac1797980aad0' },
        { Name: "Iced Cappuccino", Description: "A refreshing drink combining rich espresso and cold milk with a thick whipped foam", Price: 64, img: 'https://cdn.othoba.com/images/thumbs/0720146_iced-cappuccino_400.webp' },
        { Name: "Iced Mocha", Description: "A rich and refreshing blend of high quality espresso coffee with a rich chocolate sauce", Price: 68, img: 'https://www.forkknifeswoon.com/wp-content/uploads/2016/10/Fork_Knife_Swoon_Double_Chocolate_Blended_Iced_Mocha_10.jpg' },
        { Name: "Spanish Iced Latte", Description: "Coffee made with espresso and milk, sweetened with condensed milk", Price: 70, img: 'https://www.nestleprofessional.in/sites/default/files/2024-09/Spanish-Latte-756x471.jpg' },
        { Name: "Affogato", Description: "It is a magical combination of hot espresso coffee and cold ice cream", Price: 73, img: 'https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-videoSixteenByNineJumbo1600-v2.jpg' },
        { Name: "Iced White Mocha", Description: "It is characterized by its rich creamy and sweet taste", Price: 75, img: 'https://cloudassets.starbucks.com/is/image/sbuxcorp/IcedWhiteChocolateMocha?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85' },
        { Name: "Coffee Milkshake", Description: "A rich blend of vanilla ice cream and brewed coffee", Price: 64, img: 'https://sweetnessandbite.com/wp-content/uploads/2023/07/coffee-milkshakes-featured-image.jpg' },
        { Name: "Ice Cream Coffee", Description: "It combines the refreshing taste of cold coffee with the rich creamy texture of ice cream", Price: 70, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSss3bDs6Eyk-JqzqS5RZUNqrOIbdKQl4f3ww&s' },
        // { Name: "", Description: "", Price: , img: '' },
    ]
    const { favorites, setFavorites } = useFavorites()
    const addcart = (el) => {
        let index = favorites.findIndex((pro) =>  pro.Name == el.Name )
        let copy = [...favorites]
        if (index == -1) {
            copy.push({ ...el, qty: 1 })
            toast.success('add is order with favorites')
        }
        setFavorites(copy)
         sessionStorage.setItem('order', JSON.stringify(copy))
        //   console.log("storage:", sessionStorage.getItem('order'));

    }

return (
    <div>
        <div className='flex flex-col'>
            <p id="coffid" className="font-bold text-[26px] md:text-[36px] underline  p-2 md:pt-6 md:px-10 "> Cold Coffee</p>
            <div className="flex  items-center justify-center w-full">
                <div className="carousel  rounded-2xl carousel-center   max-w-xs md:min-w-[82%]  md:h-90 " >
                    <div className=' flex md:grid  md:grid-cols-5 gap-2 md:gap-4'>
                        {Date.map((el, index) => {
                            return (
                                <div key={index} className='w-52 md:w-55 h-auto gap-2 bg-emerald-50 rounded-2xl p-2 flex flex-col justify-between shrink-0'>
                                    <img className='rounded-2xl  object-fill w-full h-35 ' src={el.img} alt="" />
                                    <div className='flex  flex-col gap-1 h-22 md:h-21'>
                                        <h1 className='underline text-[14px] md:text-[16px]' >{el.Name}</h1>
                                        <p className='text-[12px] text-gray-400'>{el.Description}</p>
                                    </div>
                                    <div className="flex  items-center justify-between ">
                                        <p className='text-[16px]' >{el.Price} EGP</p>

                                        <button
                                            onClick={() => addcart(el) }
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
                                                <path d="M8 12H16" strokewidth="1.5"></path>
                                                <path d="M12 16V8" strokewidth="1.5"></path>
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
