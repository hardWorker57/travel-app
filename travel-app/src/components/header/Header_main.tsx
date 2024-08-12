import { Link, NavLink } from 'react-router-dom'
import { FaPlane } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import Header_block from './Header_block';
import { PiPlanet } from "react-icons/pi";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='Header pb-96 h-screen relative text-white'>
      <div className='pt-12 flex items-center justify-between container mx-auto'>
        <div className="flex items-center gap-x-8 text-lg">
          <NavLink to='flights' className='flex gap-x-1 items-center'><FaPlane /> Find Flight</NavLink>
          <NavLink to='stays' className='flex gap-x-1 items-center'><IoBedSharp /> Find Stays</NavLink>
        </div>
        <Link to='/' className="text-4xl flex items-center logo">g<span><PiPlanet /></span>lobe</Link>
        <div className="auth flex">
          <Link to='logIn' className="text-lg py-2.5 px-6">Login</Link>
          <Link to='signUp' className="text-lg py-2.5 px-6 bg-green-400 rounded-lg">Sign up</Link>
        </div>
      </div>
      <div className="flex flex-col items-center pt-24 gap-y-4">
        <div className="text-5xl">Helping Others</div>
        <div className="text-8xl">Live & Travel</div>
        <div className="text-2xl">Special offers to suit your plan</div>
      </div>
      <div className='absolute -z-10 top-0 left-0 p-6 '><img className='w-screen brightness-75' src='/header.png' alt="" /></div>
      <Header_block/>
    </div>
  )
}

export default Header