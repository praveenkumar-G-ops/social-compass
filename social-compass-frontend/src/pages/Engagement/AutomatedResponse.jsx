import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/images/navbar/search.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import SidebarComp from "../../components/SidebarComp";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Styles/Heading";
import Description from "../../components/Styles/Description";
import Button from "../../components/Styles/Button";

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <div onClick={handleToggle} className="flex items-center w-10 h-6 bg-white border rounded-full p-1 cursor-pointer">
    <div className={`w-4 h-4 bg-[#484848] rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-4" : "translate-x-0"}`}></div>
  </div>
);

const AutomatedResponse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  useEffect(() => {
    dispatch(setSidebarItem("Engagement"));
  }, [dispatch]);

  const handleToggle1 = () => setIsOn1(!isOn1);
  const handleToggle2 = () => setIsOn2(!isOn2);

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Engagement"));
    navigate(path);
  };

  const renderTableRow = (isOn, handleToggle) => (
    <tr className="hover:bg-[rgba(234,234,234,1)]">
      <td className="p-2">
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
      </td>
      <td className="p-2 text-[rgba(108,108,108,1)] font-poppins text-sm">Away message</td>
      <td className="p-2 text-[rgba(108,108,108,1)] font-poppins text-sm">Greetings</td>
      <td className="p-2">
        <div className="flex gap-2">
          <img src={facebook} alt="Facebook" className="h-5 w-5" />
          <img src={instagram} alt="Instagram" className="h-5 w-5" />
        </div>
      </td>
      <td className="p-2">
        <button className="text-[rgba(108,108,108,1)] font-poppins text-sm">Edit</button>
      </td>
    </tr>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <div className="flex items-center space-x-2 text-gray-600 ml-8 mt-8 font-poppins">
            <Heading text="Inbox > Automated responses" />
          </div>
          <div className="w-full max-w-6xl mx-auto mt-10">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between p-5">
                <div className="flex flex-col">
                  <h2 className="font-semibold font-poppins mb-1 text-black">Automated responses</h2>
                  <Description text="Setup automated responses to manage your conversation" />
                </div>
                <div>
                  <Button text="Create response" onClick={() => handleButtonClick("/create-response")} />
                </div>
              </div>

              <div className="border-b border-gray-300 my-5"></div>

              <div className="bg-white rounded-lg px-5">
                <div className="flex items-center relative">
                  <img src={searchIcon} alt="Search Icon" className="absolute left-3 h-5 w-5" />
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full h-9 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                    placeholder="Search"
                  />
                </div>
                <table className="w-full text-left mt-8">
                  <thead>
                    <tr>
                      <th className="p-2">Status</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Goal</th>
                      <th className="p-2">Channel</th>
                      <th className="p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTableRow(isOn1, handleToggle1)}
                    {renderTableRow(isOn2, handleToggle2)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedResponse;