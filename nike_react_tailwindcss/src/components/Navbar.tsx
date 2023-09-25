import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* navbar */}
      <nav className=" navbar navbar-padding bg-black">
        <img src="/assets/images/header-logo.svg" />
        <div className="ul1 hidden  lg:block">
          <a href="#" className="a-style text-white font-semibold">
            Home
          </a>
          <a href="#" className="a-style text-white font-semibold">
            About Us
          </a>
          <a href="#" className="a-style text-white font-semibold">
            Projects
          </a>
          <a href="#" className="a-style text-white font-semibold">
            Contact Us
          </a>
        </div>
        <div className="hidden md:block flex space-x-5">
          <a
            href="#"
            className="text-lg bg-red-400 text-white px-3 py-2 rounded-lg font-semibold"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-lg  bg-red-400 text-white px-3 py-2 rounded-lg font-semibold"
          >
            Explore now
          </a>
        </div>
        <button className="block md:hidden">
          <img src="/assets/icons/hamburger.svg" className="h-7" />
        </button>
      </nav>
      {/* navbar */}
    </div>
  );
};

export default Navbar;
