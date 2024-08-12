import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiPlanet } from "react-icons/pi";
import Footer_block from "./Footer_block";
// type Props = {}

const Footer = () => {
  return (
    <div className='footer mt-60 relative'>
      <Footer_block/>
      <div className="max-w-7xl pb-16 pt-48 mx-auto flex flex-wrap justify-between">
        <div className="links flex flex-col gap-y-7">
          <div className="text-4xl flex items-center font-semibold">g<span className="text-white"><PiPlanet /></span>lobe</div>
          <div className="text-xl flex gap-x-2">
            <FaFacebook /><FaTwitter /><FaYoutube /><AiFillInstagram />
          </div>
        </div>
        <div className="flex justify-between gap-x-20 pr-20">
            <div className="footer_card">
              <div className="text-lg font-semibold">Our Destinations</div>
              <div className="text-base">Canada</div>
              <div className="text-base" >Alaksa</div>
              <div className="text-base" >France</div>
              <div className="text-base" >Iceland</div>
            </div>
            <div className="footer_card">
              <div className="text-lg font-semibold">Our Activities</div>
              <div className="text-base" >Northern Lights</div>
              <div className="text-base" >Cruising & sailing</div>
              <div className="text-base" >Multi-activities</div>
              <div className="text-base" >Kayaing</div>
            </div>
            <div className="footer_card">
              <div className="text-lg font-semibold">Travel Blogs</div>
              <div className="text-base" >Bali Travel Guide</div>
              <div className="text-base" >Sri Lanks Travel Guide</div>
              <div className="text-base" >Peru Travel Guide</div>
              <div className="text-base" >Bali Travel Guide</div>
            </div>
            <div className="footer_card">
              <div className="text-lg font-semibold">About Us</div>
              <div className="text-base" >Our Story</div>
              <div className="text-base" >Work with us</div>
            </div>
            <div className="footer_card">
              <div className="text-lg font-semibold">Contact Us</div>
              <div className="text-base" >Our Story</div>
              <div className="text-base" >Work with us</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer