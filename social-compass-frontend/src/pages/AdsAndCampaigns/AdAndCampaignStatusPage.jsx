import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import adStatus from "../../assets/images/adsAndCampaign/adStatus.png";
import Heading from "../../components/Styles/Heading";
import searchIcon from "../../assets/images/navbar/search.png";
import Button from "../../components/Styles/Button";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";

const AdAndCampaignStatusPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("Live Ads");
  const [timeFrame, setTimeFrame] = useState("Week");

  const adData = [
    {
      id: 1,
      image: adStatus,
      title: "Plaza with an ornate palace complex",
      date: "Feb 20, 2024 2:00PM",
      amount: 15000,
    },
    {
      id: 2,
      image: adStatus,
      title: "Plaza with an ornate palace complex",
      date: "Feb 20, 2024 2:00PM",
      amount: 15000,
    },
    {
      id: 3,
      image: adStatus,
      title: "Plaza with an ornate palace complex",
      date: "Feb 20, 2024 2:00PM",
      amount: 15000,
    },
    {
      id: 4,
      image: adStatus,
      title: "Plaza with an ornate palace complex",
      date: "Feb 20, 2024 2:00PM",
      amount: 15000,
    },
    {
      id: 5,
      image: adStatus,
      title: "Plaza with an ornate palace complex",
      date: "Feb 20, 2024 2:00PM",
      amount: 15000,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto px-10 mt-4 scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          {/* Heading dropdown and toggle button div */}
          <div className="flex justify-between items-center ">
            <Heading text={"Ads and campaign status"} />
            <div className="flex items-center space-x-2">
              {/* Dropdown */}
              <select className="border border-gray-400 rounded-lg text-gray-400 font-poppins">
                <option>All channels</option>
              </select>

              {/* Toggle button  */}
              <div className="flex border rounded p-2">
                <button
                  className={`px-4 py-2 font-poppins text-xs ${
                    timeFrame === "Week"
                      ? "bg-[#242565] text-white rounded-md"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setTimeFrame("Week")}
                >
                  Week
                </button>
                <button
                  className={`px-4 py-2 font-poppins text-xs ${
                    timeFrame === "Month"
                      ? "bg-[#242565] text-white rounded-md"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setTimeFrame("Month")}
                >
                  Month
                </button>
              </div>

            </div>
          </div>

          
          <div className="   px-4 py-2 mb-8">
          
          <div className="flex flex-col sticky top-0 bg-gray-100 z-10  p-2">
             
             {/* toggle buttons */}
             <div className="flex space-x-4 mb-4">
               <button
                 className={`px-4 py-2 ${
                   activeTab === "Live Ads" ? "border-b-4 border-[#242565]" : ""
                 }`}
                 onClick={() => setActiveTab("Live Ads")}
               >
                 Live Ads
               </button>
               <button
                 className={`px-4 py-2 ${
                   activeTab === "Previous Ads"
                     ? "border-b-4 border-[#242565]"
                     : ""
                 }`}
                 onClick={() => setActiveTab("Previous Ads")}
               >
                 Previous Ads
               </button>
             </div>
 
             {/* Search and dropdown div */}
             <div className="flex justify-between item-center mb-4">
               {/* Search bar */}
               <div className="flex items-center relative">
                 <img
                   src={searchIcon}
                   alt="Search Icon"
                   className="absolute left-3 h-5 w-5"
                 />
                 <input
                   type="text"
                   className="border border-gray-500 rounded-md  w-[500px] h-10 pl-10 pr-2 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                   placeholder="Search"
                 />
               </div>
 
               {/* Drop down */}
               <select className="border border-gray-400 rounded">
                 <option>Post</option>
               </select>
             
             </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
            {/* Data heading */}
            <div className="flex justify-between border-b">
              <div className="ml-20">Ads</div>
              <div className="ml-32">Amount Spent</div>
              <div></div>



              
            </div>



            {/* Data */}
            <div>
              {adData.map((ad) => (
                <div
                  key={ad.id}
                  className="flex items-center justify-between py-4 border border-gray-300 px-5 rounded-md my-3"
                >
                  <div className="flex items-center">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-poppin text-sm">{ad.title}</h3>
                      <p className="text-xs text-blue-500">{ad.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4">${ad.amount.toLocaleString()}</span>
                  </div>
                  <div>
                    <Button
                      text={activeTab === "Live Ads" ? "Edit" : "Boost"}
                    />
                  </div>
                </div>
              ))}
            </div>
           
          </div>
          </div>

          

          {/* data display div */}
         
        </div>
      </div>
    </div>
  );
};

export default AdAndCampaignStatusPage;
