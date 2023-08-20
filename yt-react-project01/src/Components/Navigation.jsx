const Navigation = () => {
  return (
    <nav className="flex justify-around items-center ">
      {/* Logo */}
      <div>
        <img className="h-20" src="./Images/s1.png" alt="Brand Logo" />
      </div>
      {/* Menus */}
      <ul className="flex justify-between items-center font-medium gap-5">
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      {/* button */}
      <button className="bg-red-600 px-5 py-2 text-white rounded font-medium">
        Login
      </button>
    </nav>
  );
};

export default Navigation;
