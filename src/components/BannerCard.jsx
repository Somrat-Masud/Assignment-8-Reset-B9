import banner from "../assets/banner.jpg";

const BannerCard = () => {
  return (
    <div>
      <div className=" text-center text-white space-y-2 bg-[#9538E2]">
        <h4 className=" font-bold text-4xl w-2/4 mx-auto ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h4>
        <p className="w-3/5 mx-auto text-xl mt-6 ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-4xl m-4">
          Shop Now
        </button>
      </div>
      <div className="border-8  -mt-32  bg-[#9538E2] rounded-xl  border-[#9538E2] h-[350px] w-[650px] mx-auto ">
        <div className="card  shadow-sm justify-center items-center">
          <figure>
            <img
              className="h-[335px] w-[650px] rounded-xl"
              src={banner}
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BannerCard;
