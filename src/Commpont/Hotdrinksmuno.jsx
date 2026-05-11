import Coffee from './Coffeehot';
import Herbs from './Herbshot';
import Otherdrinks from './Otherdrinkshot';
export default function Hotdrinksmuno() {

  return (
    <div className='flex flex-col w-full ' >
      <p className='w-35 h-10 bg-emerald-600 text-[26px] flex items-center rounded-xl pl-2 shadow-stone-700 shadow-2xl animate-fade-in-right'> Hot Drinks </p>
      <Coffee />
      <Otherdrinks />
      <Herbs />
    </div >
  )
}
