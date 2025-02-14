import banner from "../assets/banner.jpg";

const BannerCard = () => {
  return (
    <div>
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
