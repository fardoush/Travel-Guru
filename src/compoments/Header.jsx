import React, { use } from "react";
import logo from "../../public/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";



const Header = () => {
const {user, logOut} = use(AuthContext);

const handleLogOut = () => {
  console.log("LogOut");
  logOut().then(() => {
  // Sign-out successful.
  alert(" LogOut")
}).catch((error) => {
  // An error happened.
});

}
    const link = <>
    <NavLink to='/' className="font-semibold text-base hover:text-secondary active:text-secondary transition duration-75">Home</NavLink>
    <NavLink to='/destination' className="font-semibold text-base hover:text-secondary active:text-secondary transition duration-75">Destination</NavLink>
    <NavLink to='/blog' className="font-semibold text-base hover:text-secondary active:text-secondary transition duration-75">Blog</NavLink>
    <NavLink to='/contact' className="font-semibold text-base hover:text-secondary active:text-secondary transition duration-75">Contact</NavLink>
    </>
  return (
    <div className="navbar bg-transparent shadow-sm z-4 sticky top-2 px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img src={logo} alt="" className="w-22 object-cover" />
        </Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black gap-5">
         {link}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="text-secondary font-bold">{user && user.email}</div>
      
        {
          user ? <button onClick={handleLogOut} className="btn bg-secondary text-black border-0">LogOut</button> : <Link to="/auth/login" className="btn bg-secondary text-black border-0">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
