import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../components/Styles/Heading";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import searchIcon from "../../assets/images/navbar/search.png";
import globe from "../../assets/images/competitorAnalysis/globe.png";
import post1 from "../../assets/images/adsAndCampaign/post1.png";
import post2 from "../../assets/images/adsAndCampaign/post2.png";
import post3 from "../../assets/images/adsAndCampaign/post3.png";
import post4 from "../../assets/images/adsAndCampaign/post4.png";
import reel1 from "../../assets/images/adsAndCampaign/reel1.png";
import reel2 from "../../assets/images/adsAndCampaign/reel2.png";
import reel3 from "../../assets/images/adsAndCampaign/reel3.png";
import reel4 from "../../assets/images/adsAndCampaign/reel4.png";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const DiscoverAdsWithFilterPage = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("Post");

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const options = ["All Countries", "A", "B"];
  const filters = ["Post", "Reels"];

  const posts = [post1, post2, post3, post4];
  const reels = [reel1, reel2, reel3, reel4];

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
        <div className="bg-white ml-10 mr-20 mt-10">
          {/* div for Search bar and dropdown */}
          <div className="flex gap-10 mb-5 mt-5 ml-8">
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
        </div>

        {/* dropdown for posts and reels */}
        <div className="flex justify-end mr-20 my-5">
          <select
            className="border border-gray-300 rounded-md pr-20 font-poppins text-gray-400 text-xs"
            onChange={(e) => setSelectedFilter(e.target.value)}
            value={selectedFilter}
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>

        {/* Display images based on selected filter */}
        <div className="flex justify-start gap-4 px-10">
          {selectedFilter === "Post"
            ? posts.map((post, index) => (
                <img key={index} src={post} alt={`Post ${index + 1}`} className="w-[23%]" />
              ))
            : reels.map((reel, index) => (
                <img key={index} src={reel} alt={`Reel ${index + 1}`} className="w-[23%]" />
              ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverAdsWithFilterPage;
