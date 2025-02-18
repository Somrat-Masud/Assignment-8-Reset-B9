import { Outlet, useLoaderData } from "react-router-dom";
import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";

const Home = () => {
  const category = useLoaderData();
  return (
    <div className="rounded-3xl">
      <Banner></Banner>
      <h4 className="text-center font-bold text-4xl mt-60 text-[#9538E2] ">
        Explore Cutting-Edge Gadgets
      </h4>
      <div className="flex justify-between mt-4  w-[1150px] mx-auto">
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
