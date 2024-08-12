import React, { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";

type Props = {};

const Header_block = (props: Props) => {

  const [flights, setFlights] = useState(true)

  return (
    <div>
      <div className="absolute shadow left-1/2 -translate-x-1/2 -bottom-16 rounded-xl flex flex-col max-w-7xl w-full gap-y-6 mx-auto bg-white p-8 text-black">
        <div className="flex gap-x-8">
          <div className={`tabs pb-3 adelay ${flights && 'active'}`}>
            <div className="text-lg flex items-center gap-x-2 cursor-pointer font-bold" onClick={() => {setFlights(true)}}><FaPlane /> Flights</div>{" "}
          </div>
          <div className="w-px h-7 bg-gray-300"></div>
          <div className={`tabs pb-3 adelay ${flights || 'active'}`}>
            <div className="text-lg flex items-center gap-x-2 cursor-pointer font-bold" onClick={() => {setFlights(false)}}><IoBedSharp /> Stays</div>
          </div>
        </div>
        <div className="flex justify-between text-lg">
          <div className="input border p-3 w-1/4 rounded-lg cursor-pointer">{flights ? <div className="flex items-center justify-between">Lahore - Karachi<div><LuArrowRightLeft /></div></div> : <div className="flex items-center gap-x-4"><div><IoBedSharp /></div>Istanbul, Turkey</div> }</div>
          <div className="input border p-3 w-1/6 rounded-lg cursor-pointer">{flights ? <div className="flex items-center justify-between">Return <div><IoIosArrowDown /></div></div> : <div className="flex items-center justify-between"> Fri 12/2 <div><IoCalendar /></div></div>}</div>
          <div className="input border p-3 w-1/4 rounded-lg cursor-pointer">{flights ? '07 Nov 22 - 13 Nov 22' : <div className="flex items-center justify-between">Sun 12/4 <div><IoCalendar /></div></div>} </div>
          <div className="input border p-3 w-1/4 rounded-lg cursor-pointer">{flights ? '1 Passenger, Economy' : <div className="flex items-center justify-between"><div><IoPerson /></div> 1 room, 2 guests <div><IoIosArrowDown /></div> </div>} </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-x-2 items-center p-3 btn"><FaPlus />Add Promo Code</div>
          <div className="flex gap-x-2 items-center p-3 btn dark">{flights ? <IoPaperPlane /> : <IoCalendar />} Show Filghts</div>
        </div>
      </div>
    </div>
  );
};

export default Header_block;
