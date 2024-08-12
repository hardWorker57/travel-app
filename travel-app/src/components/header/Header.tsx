import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { FaPlane } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { PiPlanet } from "react-icons/pi";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="py-5 flex items-center justify-between container mx-auto">
      <div className="text-lg flex items-center gap-x-8">
        <NavLink to="flights" className="nav_link adelay flex gap-x-1 items-center">
          <FaPlane /> Find Flight
        </NavLink>
        <NavLink to="stays" className="nav_link adelay flex gap-x-1 items-center">
          <IoBedSharp /> Find Stays
        </NavLink>
      </div>
      <Link to="/" className="text-4xl flex items-center logo">
        g
        <span>
          <PiPlanet />
        </span>
        lobe
      </Link>
      <div className="auth flex">
        <Link to="logIn" className="text-lg py-2.5 px-6">
          Login
        </Link>
        <Link
          to="signUp"
          className="text-lg text-white py-2.5 px-6 bg-black rounded-lg"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
