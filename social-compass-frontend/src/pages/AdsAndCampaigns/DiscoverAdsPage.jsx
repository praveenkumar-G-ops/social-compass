import Heading from "../../components/Styles/Heading";
import Description from "../../components/Styles/Description";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import searchIcon from "../../assets/images/navbar/search.png";
import globe from "../../assets/images/competitorAnalysis/globe.png";
import image1 from "../../assets/images/competitorAnalysis/image1.png";
import image2 from "../../assets/images/competitorAnalysis/image2.png";
import image3 from "../../assets/images/competitorAnalysis/image3.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";

const DiscoverAdsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const options = ["All Countries", "A", "B"];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-4 ml-10">
          <Heading text={"Ads and campaign > Discover Ads"} />
        </div>

        {/* White div for bg */}
        <div className="h-screen bg-white ml-10 mr-20 mt-10">
          {/* div for Search bar and dropdown */}
          <div className="flex gap-10 mb-5 mt-12 ml-8">
            {/* Searchbar */}
            <div className="flex items-center relative">
              <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute left-3 h-5 w-5"
              />
              <input
                type="text"
                className="border rounded-md w-[700px] h-10 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                placeholder="Search"
              />
            </div>

            {/* Dropdown */}
            <div className="flex items-center relative">
              <img
                src={globe}
                className="absolute left-3 h-5 w-5 bg-green-600 rounded-full"
              />
              <select className="border h-full w-[250px] border-gray-300 rounded p-2 pl-10 pr-4 font-poppins text-gray-400 text-xs">
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Text div */}
          <div className="flex flex-col gap-2 justify-center items-center mt-20">
            <Heading text={"Search the ads"} />
            <div className="w-1/2 mx-auto text-center">
              <Description
                text={
                  "Lorem ipsum dolor sit amet consectetur. Scelerisque morbi dui habitant nunc facilisis gravida."
                }
              />
            </div>
          </div>

          {/* div for images */}
          <div className="relative h-[500px] overflow-hidden">
            {" "}
            {/* Adjust height as needed */}
            <div className="grid grid-cols-7 mt-20 mx-auto">
              <div></div>
              <img src={image3} alt="" className="w-[150px] mt-20" />
              <img src={image2} alt="" className="w-[150px] mt-10" />
              <img src={image1} alt="" className="w-[150px]" />
              <img src={image2} alt="" className="w-[150px] mt-10" />
              <img src={image3} alt="" className="w-[150px] mt-20" />
              <div></div>

              <div></div>
              <img src={image3} alt="" className="w-[150px]" />
              <img src={image2} alt="" className="w-[150px]" />
              <img src={image1} alt="" className="w-[150px]" />
              <img src={image2} alt="" className="w-[150px]" />
              <img src={image3} alt="" className="w-[150px]" />
              <div></div>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverAdsPage;
