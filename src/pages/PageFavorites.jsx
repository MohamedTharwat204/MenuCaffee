import { useEffect } from "react";
import Favorites_cart from "../Commpont/Favorites_cart";
import { useFavorites } from "../store";


export default function PageFavorites() {
  const { favorites, setFavorites } = useFavorites();
  useEffect(() => {
    let dataorder = JSON.parse(sessionStorage.getItem('order')) || [];
    setFavorites(dataorder) 

  }, [])

      
  



  return (
    <div className='w-full h-dvh flex  px-2 bg-stone-400'>


      <div className=" flex flex-col flex-1 md:mt-30 mt-10 ">

        <div className="overflow-y-auto  h-[84%] md:h-auto">

          <div className="h-auto p-5 ">
            <Favorites_cart el={favorites} />
          </div>


        </div>

      </div>

    </div>
  )
}