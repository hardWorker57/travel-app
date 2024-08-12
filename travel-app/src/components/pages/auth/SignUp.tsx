import { PiPlanet } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="p-20 flex justify-between gap-x-9">
      <div>
        <img src="login.png" alt="" className="max-w-full"/>
      </div>
      <div className="flex flex-col gap-y-7 w-1/2">
        <Link to='/' className="logo flex items-center text-4xl font-semibold">g<span><PiPlanet /></span>lobe</Link><br />
        <div className="text-6xl">Sign up</div>
        <div className="text-base">Let's get you all st up so you can access your personal account.</div>
        <div className="grid grid-cols-2 gap-6">
          <input placeholder="john@gmail.com" className="border p-3 rounded-md border-gray-500" type="email" />
          <input placeholder="john@gmail.com" className="border p-3 rounded-md border-gray-500" type="email" />
          <input placeholder="john@gmail.com" className="border p-3 rounded-md border-gray-500" type="email" />
          <input placeholder="john@gmail.com" className="border p-3 rounded-md border-gray-500" type="email" />
        </div>
        <input className="border p-3 rounded-md border-gray-500" placeholder="•••••••••••" type="password" />
        <input className="border p-3 rounded-md border-gray-500" placeholder="•••••••••••" type="password" />
        <div className="flex items-center">
          <div className="flex items-center gap-x-2">
            <input className="cursor-pointer" type="checkbox" name="" id="" />
            <div className="text-lg">I agree to all the <span className="text-red-400">Terms</span> and <span className="text-red-400"> Privacy Policies</span></div>
          </div>
        </div>
        <button className="btn dark py-3 hover:scale-105 font-semibold">Login</button>
        <div className="text-base flex justify-center gap-x-1">Already have an account? <Link to='/logIn' className="text-red-400">Login</Link></div>
        <div className="text-gray-500">
          <div className="text-between-lines">
            <span>Or Sign up with</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 justify-between">
          <div className="ico text-xl text-blue-600 py-5 px-20 rounded-lg border"><FaFacebook /></div>
          <div className="ico text-xl text-orange-600 py-5 px-20 rounded-lg border"><FaGoogle /></div>
          <div className="ico text-xl py-5 px-20 rounded-lg border"><FaApple /></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp