import { PiPlanet } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {}

const LogIn = (props: Props) => {
  return (
    <div className="p-20 flex justify-between gap-x-9">
      <div className="flex flex-col gap-y-7 w-1/2">
        <Link to='/' className="logo flex items-center text-4xl font-semibold">g<span><PiPlanet /></span>lobe</Link><br />
        <div className="text-6xl">Login</div>
        <div className="text-base">Login to access your Golobe account</div>
        <input className="border p-3 rounded-md border-gray-500" placeholder="john.doe@gmail.com" type="email" />
        <input className="border p-3 rounded-md border-gray-500" placeholder="•••••••••••" type="password" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <div className="text-lg">Remember me</div>
          </div>
          <Link to='/forgotPassword' className="text-red-400">Forgot Password</Link>
        </div>
        <button className="btn dark hover:scale-105 py-3 font-semibold">Login</button>
        <div className="text-base flex justify-center gap-x-1">Don't have an account? <Link to='/signUp' className="text-red-400">Sign up</Link></div>
        <div className="text-gray-500">
          <div className="text-between-lines">
            <span>Or login with</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 justify-between">
          <div className="ico text-xl text-blue-600 py-5 px-20 rounded-lg border"><FaFacebook /></div>
          <div className="ico text-xl text-orange-600 py-5 px-20 rounded-lg border"><FaGoogle /></div>
          <div className="ico text-xl py-5 px-20 rounded-lg border"><FaApple /></div>
        </div>
      </div>
      <div>
        <img src="login.png" alt="" className="max-w-full"/>
      </div>
    </div>
  )
}

export default LogIn