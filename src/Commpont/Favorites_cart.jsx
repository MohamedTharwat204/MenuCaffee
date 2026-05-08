import Swal from 'sweetalert2';
import noimg from '../assets/noimg.webp';
import { useFavorites } from "../store";
import toast from 'react-hot-toast';

export default function Favorites_cart({ el }) {
  const { favorites, setFavorites } = useFavorites();

  // const clear = (index) => {

  //   Swal.fire({
  //     icon: 'question',
  //     showCancelButton: true,
  //     text: 'Are you sure want is clear is favoritest'
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       setFavorites([])
  //       Swal.fire({
  //         icon: 'success',
  //         text: 'clear is success '
  //       })

  //     }
  //   })


  // }
  const delet = (index) => {
    let copy = [...favorites]
    if (copy[index].qty > 1) {
      copy[index].qty--;

    }
    else {
      copy.splice(index, 1)
      toast.error('Delet of Oredar')

    }
    setFavorites(copy)
    sessionStorage.setItem('order', JSON.stringify(copy))
    // console.log("storage:", sessionStorage.getItem('order'));

  }

  return (
    //  <p onClick={() => clear(index)}>
    //             <button
    //               className="group relative flex h-10 w-8 flex-col items-center justify-center overflow-hidden  "
    //             >

    //               <svg
    //                 width="16"
    //                 fill="none"
    //                 viewBox="0 0 39 7"
    //                 className="origin-right bg-black duration-500 group-hover:rotate-90"
    //               >
    //                 <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
    //                 <line
    //                   strokewidth="3"
    //                   stroke="white"
    //                   y2="1.5"
    //                   x2="26.0357"
    //                   y1="1.5"
    //                   x1="12"
    //                 ></line>
    //               </svg>
    //               <svg width="16" fill="none" viewBox="0 0 33 39" className="bg-black">
    //                 <mask fill="white" id="path-1-inside-1_8_19">
    //                   <path
    //                     d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
    //                   ></path>
    //                 </mask>
    //                 <path
    //                   mask="url(#path-1-inside-1_8_19)"
    //                   fill="white"
    //                   d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
    //                 ></path>
    //                 <path strokewidth="4" stroke="white" d="M12 6L12 29"></path>
    //                 <path strokewidth="4" stroke="white" d="M21 6V29"></path>
    //               </svg>
    //             </button> 
    //    </p>
    <div className=' flex flex-col md:grid grid-cols-5  w-full gap-3' >

      {el.map((el, index) => (


        <div key={index} className='h-25 w-full  md:h-75  bg-white  items-center  md:flex-col flex rounded-2xl'>
          <img className='w-24 p-2 md:w-full md:h-[60%]  rounded-2xl' src={el.img ? el.img : noimg} alt="" />
          <div className='flex flex-col md:flex-row w-full md:justify-between md:items-center px-4 h-20 relative '>
            <div className='flex flex-col gap-2  h-full  w-full '>
              <p className='text-[16px]  underline  underline-offset-4 flex w-full' >{el.Name} </p>
              <p className='text-[14px] '>{el.Price} EGP</p>
            </div>
            <div className='flex gap-2  bg-amber-50 px-4 py-2 rounded-2xl  items-center w-38 h-12 absolute right-2 top-8  md:right-2 md:top-13 '>
              <p className='w-35'> number : {el.qty}</p>
              <button className=' rounded-full flex items-center justify-center' onClick={() => { delet(index) }} >
                <button
                  className="group relative flex h-10 w-8 flex-col items-center justify-center overflow-hidden  "
                >

                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="origin-right bg-black duration-500 group-hover:rotate-90"
                  >
                    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                    <line
                      strokewidth="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" className="bg-black">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path
                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                      ></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path strokewidth="4" stroke="white" d="M12 6L12 29"></path>
                    <path strokewidth="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                </button>
              </button>
            </div>
          </div>
        </div>

      )
      )}
    </div>

  )
}
