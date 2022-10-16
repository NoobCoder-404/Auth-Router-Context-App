import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-white">
        <div className="flex-1 mx-5">
          <Link to="/" className=" font-bold btn btn-ghost normal-case text-2xl">
            <img className=" w-12" src={logo} alt="" /> Awesome Auth
          </Link>
        </div>
        <div className="flex-none">
          <ul className="text-lg font-bold hidden lg:flex">
            <li className="px-5">
              <Link to="/home">Home</Link>
            </li>
            <li className="px-5">
              <Link to="/login">Log in</Link>
            </li>
            <li className="px-5">
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end lg:hidden ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow  rounded-box w-52 bg-neutral ">
              <li className="hover:bg-sky-700">
                <Link to="/home" className="justify-between">
                  Home
                </Link>
              </li>
              <li className="hover:bg-sky-700">
                <Link to="/login">Log in</Link>
              </li>
              <li className="hover:bg-sky-700">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
