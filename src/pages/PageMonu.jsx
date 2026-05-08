import Coldmuno from "../Commpont/Coldmuno";
import Dessmuno from "../Commpont/Dessmuno";
import Icecremmuno from "../Commpont/Icecremmuno";
import Mune from "../Commpont/Mune";
import Hotdrinksmuno from "../Commpont/Hotdrinksmuno";
import Juicesmuno from "../Commpont/Juicesmuno";


export default function PageMonu() {
    
 


    return (
        <div className="w-full   max-h-screen overflow-hidden  flex  ">
            <div className="mt-0 md:mt-16    ">  <Mune /> </div>

            <div className="flex-1 flex flex-col mt-20 md:mt-34  border-t-2  border-amber-950 ">

                    <div className="flex-1 overflow-y-auto  px-2 pt-4 h-full">


                    <div className=" flex flex-col gap-4   ">
                        
                        <div id="Coff" className="h-auto w-full bg-linear-to-t from-emerald-100 to-[#0b050167] rounded-2xl px-4 py-3">< Hotdrinksmuno/></div>
                        <div id="Cold" className="h-auto w-full bg-linear-to-t from-blue-100 to-cyan-400 rounded-2xl  px-4 py-3"> <Coldmuno/></div>
                        <div id="Juic" className="h-auto w-full bg-linear-to-t from-blue-600 to-cyan-900 rounded-2xl  px-4 py-3"> <Juicesmuno/></div>
                        <div id="Dess" className="h-auto w-full bg-linear-to-b  from-amber-900 to-orange-50 rounded-2xl  px-4 py-3"> <Dessmuno /></div>
                        <div id="Icecr" className="h-auto w-full bg-linear-to-b from-pink-200 to-yellow-100 rounded-2xl px-4 py-3"> <Icecremmuno /></div>
                    </div>

                </div>

            </div>

        </div>




    )

}
