import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import Heading from "../../components/Styles/Heading";
import searchIcon from "../../assets/images/navbar/search.png";
import globe from "../../assets/images/competitorAnalysis/globe.png";
import Description from "../../components/Styles/Description";
import profile from "../../assets/images/navbar/profile.png";
import williams from "../../assets/images/competitorAnalysis/williams.png";
import Button from "../../components/Styles/Button";
import { useNavigate } from "react-router-dom";

const CompetitorAnalysisWithCompetitorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Competitor Analysis"));
  }, [dispatch]);

  const options = ["All Countries", "A", "B"];
 

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="mt-4 ml-10 mr-20">
          {/* Heading */}
          <Heading text={"Competitor Discover"} />
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
                className="border border-gray-500 rounded-md  w-[700px] h-10 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
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

        {/* white div */}
        <div className="bg-white w-[90%] mt-10 ml-10 h-1/3 p-5 ">
          <div className="ml-4">
            <Heading text={"Add competitors"} />
            <Description
              text={"Get idea of the other competitors performance"}
            />
          </div>

          {/* profile vs profile */}
          <div className="flex flex-col">
              <div className="flex-1 flex mt-20 mx-20 justify-between ">
            <div className="flex items-center relative">
              <img
                src={profile}
                className="absolute left-5 h-7 w-7 rounded-full"
              />
              <select className="border h-full w-[350px] border-gray-300 rounded-3xl p-2 pl-20 pr-4 font-poppins text-sm">
                <option>Soundharya</option>
              </select>
            </div>
            <div>VS</div>
            <div className="flex items-center relative">
              <img
                src={williams}
                className="absolute left-5 h-7 w-7 rounded-full"
              />
              <select className="border h-full w-[350px] border-gray-300 rounded-3xl p-2 pl-20 pr-4 font-poppins text-sm">
                <option>William_Mans</option>
              </select>
            </div>
            
              </div>
              <div className="flex-1 flex justify-end mr-20 mt-20 ">
                <Button text={"Done"} onClick={() => {navigate("/competitor-analysis-results")}} />
              </div>
            </div>  
          
        </div>

        {/* Done button */}
  
      </div>
    </div>
  );
};

export default CompetitorAnalysisWithCompetitorPage;
