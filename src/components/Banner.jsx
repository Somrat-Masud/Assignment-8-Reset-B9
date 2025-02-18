import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="relative text-center text-white space-y-2 h-[400px] bg-[#9538E2]">
        <h4 className=" font-bold text-4xl w-2/4 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h4>
        <p className=" w-3/4 mx-auto text-xl mt-6 ">
          Explore the latest gadgets that will take your experience to s the
          next level. From smart devices to the coolest accessories, we have it
          all!
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-4xl m-4">
          Shop Now
        </button>
      </div>
      <div className="rounded-xl  ">
        <div className="card absolute ml-[330px] mt-[-140px] z-10 ">
          <figure>
            <img
              className="h-[335px] w-[650px] rounded-xl"
              src={banner}
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
