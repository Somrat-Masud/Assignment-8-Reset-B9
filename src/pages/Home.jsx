import { Outlet, useLoaderData } from "react-router-dom";
import BannerCard from "../components/BannerCard";
import AllProducts from "../components/AllProducts";

const Home = () => {
  const category = useLoaderData();
  // console.log(category);

  return (
    <div>
      <BannerCard></BannerCard>
      <h4 className="text-center font-bold text-xl mt-20  ">
        Explore Cutting-Edge Gadgets
      </h4>
      <div className="flex justify-between mt-4 w-[1150px] mx-auto">
        <div className="w-2/9  bg-base-200  shadow-2xl    ">
          <AllProducts category={category}></AllProducts>
        </div>
        <div className="w-8/9 bg-base-200 shadow-2xl ml-3  ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
