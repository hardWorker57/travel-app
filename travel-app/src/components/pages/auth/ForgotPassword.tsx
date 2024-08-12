import { PiPlanet } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <div className="p-20 flex justify-between gap-x-9">
      <div className="flex flex-col gap-y-7 w-1/2">
        <Link to='/' className="logo flex items-center text-4xl font-semibold">g<span><PiPlanet /></span>lobe</Link><br />
        <Link to='/login' className="flex items-center gap-x-2 adelay hover:text-red-400 text-lg"><span className="text-2xl"><IoIosArrowBack /></span>Back to login</Link>
        <div className="text-6xl">Forgot your password?</div>
        <div className="text-base">Don't worry, happens to all of us. Enter your email below to recover your password</div> <br />
        <input className="border p-3 rounded-md border-gray-500" placeholder="john.doe@gmail.com" type="email" />
        <button className="btn dark py-3 hover:scale-105 font-semibold">Submit</button> <br />
        <div className="text-gray-500">
          <div className="text-between-lines">
            <span>Or login with</span>
          </div> <br />
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

export default ForgotPassword