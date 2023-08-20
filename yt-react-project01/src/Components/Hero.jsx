const Hero = () => {
  return (
    <div className="flex item-center justify-center mx-14 ">
      {/* Hero Content */}
      <div className="flex flex-col justify-center gap-7 w-1/2 ">
        <h1 className="font-bold text-8xl">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-left ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error
          ex vel voluptates quidem enim? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, consectetur!
        </p>

        {/* Hero Buttons */}
        <div>
          <button className="bg-red-600 mr-5 text-white px-3 py-2 rounded ">
            Shop Now
          </button>
          <button className="bg-red-600 text-white px-3 py-2 rounded ">
            Category
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-1/2 ">
        <img className="h-[40rem]" src="./Images/Hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
