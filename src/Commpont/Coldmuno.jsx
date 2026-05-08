import Coldcoffee from "./Coldcoffee";
import Milkshakecold from "./Milkshakecold";
import Smoothiecold from "./Smoothiecold";

export default function Coldmuno() {
  return (
    <div>
      <p className='w-38 h-10  bg-cyan-500 text-[26px] flex items-center rounded-xl pl-2 shadow-stone-700 shadow-2xl'>Cold Drinks</p>
      <Coldcoffee />
      <Milkshakecold />
      <Smoothiecold />

    </div>
  )
}
