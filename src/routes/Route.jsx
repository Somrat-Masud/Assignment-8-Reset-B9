import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../components/ErrorPage";
import ProductsCard from "../components/ProductsCard";
import ProductCardDetails from "../components/ProductCardDetails";
import Footer from "../components/Footer";
// import ProductsCard from "../components/ProductsCard";
// import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:id",
        element: <ProductCardDetails></ProductCardDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/",
        element: <Footer></Footer>,
      },
      // {
      //   path: "/product/:id",
      //   element: <ProductDetails></ProductDetails>,
      //   loader: () => fetch("../products.json"),
      // },
    ],
  },
]);

export default router;

{
  /* <NavLink
key={category.category}
to={`/category/${category.category}`}
role="tab"
className={({ isActive }) =>
  `w-full sm:w-9/12 md:w-10/12 lg:w-full px-4 py-2 text-sm sm:text-base md:text-lg text-center font-medium rounded-full shadow-md transition-all 
${
isActive
? "bg-[#16a3ad] text-white border border-[#12775c] shadow-lg"
: "bg-white text-gray-700 hover:bg-gray-200"
}`
}
>
{category.category}
</NavLink> */
}
