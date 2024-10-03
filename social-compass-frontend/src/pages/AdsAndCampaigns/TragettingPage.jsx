import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import targetting from "../../assets/images/adsAndCampaign/targetting.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import map from "../../assets/images/adsAndCampaign/map.png";
import Button from "../../components/Styles/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useNavigate } from "react-router-dom";

const TargettingPage = () => {
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState("₹");
  const [gender, setGender] = useState("All");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [ageRange, setAgeRange] = useState([18, 44]);
  const [interests, setInterests] = useState([]);
  const currencies = ["₹", "$", "€", "£"];
  const recommendedInterests = [
    "Apple watches",
    "Classic watches",
    "Office watches",
    "Formal watches",
    "Analog watches",
    "Men watches",
  ];

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const handleInterestClick = (interest) => {
    setInterests((prev) => [...prev, interest]);
  };

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Ads and Campaign"} />
        </div>

        {/* Status bar */}
        <div className="flex justify-center items-center mt-14">
          <img src={targetting} alt="" className="h-[50px]" />
        </div>

        <div className="bg-white w-[90%] mt-10 mx-14 p-6 rounded-lg shadow overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-100% scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-full overflow-y-scroll scrollbar-thin">
          <div>
            <img src={map} alt="" className="w-[90%] mx-10 my-5" />
            <span className="text-xs text-gray-300 font-poppins ml-10">
              Select one or more location
            </span>
          </div>

          {/* Div for textfields */}
          <div className="grid grid-cols-2 gap-6 mt-20 px-10">
            <div>
              <div className="flex mt-32">
                <div className="relative inline-block mr-10">
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="appearance-none bg-transparent border border-gray-300 rounded-md p-2 pr-8"
                  >
                    {currencies.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mr-10">
                  <input
                    type="text"
                    placeholder="Lifetime Budget"
                    className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400"
                  />
                  <span className="text-xs text-gray-400">
                    Enter a valid budget for your product
                  </span>
                </div>
              </div>

              <div className="mt-20">
                <div className="flex justify-start">
                  <div className="relative">
                    <p className="absolute z-10 left-3 top-2 text-xs text-gray-400">Campaign start date</p>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="border border-gray-300 pt-6"
                    />
                  </div>
                  <div className="relative">
                  <p className="absolute z-10 left-3 top-2 text-xs text-gray-400">Campaign end date</p>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="border border-gray-300 pt-6"
                    />
                  </div>
                </div>
                <div className="flex gap-28 text-xs text-gray-500 mt-1">
                  <span>Enter start date</span>
                  <span>Enter end date</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {["7days", "14days", "21days", "30days"].map((duration) => (
                    <button key={duration} className="text-blue-500 text-xs">
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="ml-20">
            <p className="text-xs text-gray-400 font-poppins text-left mb-5 mt-3">Gender</p>
              <div className="flex justify-start mb-4 ">
                {["Male", "Female", "All"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`px-4 py-2 border-2 font-poppins text-xs border-gray-200 ${
                      gender === g ? "bg-white" : "bg-gray-200"
                    } `}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 font-poppins text-left">Suggested: All</p>

              <div className="mt-6">
              <p className="text-xs text-gray-400 font-poppins text-left mb-5 mt-3">Age</p>
                <Slider
                  range
                  min={18}
                  max={65}
                  defaultValue={ageRange}
                  onChange={setAgeRange}
                  
                />
                <div className="flex justify-between text-xs mt-2">
                  <span>{ageRange[0]}</span>
                  <span>{ageRange[1]}</span>
                  <span>65</span>
                </div>
                <p className="text-xs text-gray-400 font-poppins text-left mt-2">Suggested: 18-24</p>
              </div>

              <div className="mt-6">
              <p className="text-xs text-gray-400 font-poppins text-left mb-2 mt-3">Interests</p>
                <textarea
                  type="text"
                  placeholder=""
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <p className="text-xs text-gray-400 font-poppins text-left mt-2">Recommended Interest</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {recommendedInterests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestClick(interest)}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"
                    >
                      {interest} +
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button text="Next step" onClick={()=>{navigate('/launch-ad')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargettingPage;
