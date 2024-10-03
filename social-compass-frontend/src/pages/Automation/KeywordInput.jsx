import React, { useState } from "react";
import profile from "../../assets/images/automation/commentAutomationPage/Profile.png";
import Advertise from "../../assets/images/automation/commentAutomationPage/advertise.png";
import jacksonprofile from "../../assets/images/automation/commentAutomationPage/Jacksonprofile.png";
import SidebarComp from "../../components/SidebarComp";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
// import PublicReply from '../components/PublicReply'

const KeywordInput = () => {
  const [includeKeywords, setIncludeKeywords] = useState(["Book"]);
  const [excludeKeywords, setExcludeKeywords] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Automation"));
    navigate(path);
  };

  useEffect(() => {
    dispatch(setSidebarItem("Automation"));
  }, [dispatch]);

  const handleAddIncludeKeyword = () => {
    setIncludeKeywords([...includeKeywords, ""]);
  };

  const handleAddExcludeKeyword = () => {
    setExcludeKeywords([...excludeKeywords, ""]);
  };

  const handleRemoveIncludeKeyword = (index) => {
    const newKeywords = includeKeywords.filter((_, i) => i !== index);
    setIncludeKeywords(newKeywords);
  };

  const handleRemoveExcludeKeyword = (index) => {
    const newKeywords = excludeKeywords.filter((_, i) => i !== index);
    setExcludeKeywords(newKeywords);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-gray-700 text-xl font-semibold font-poppins mb-6">
            Automation &gt; Comment automation
          </h1>
          <div className="flex -ml-7">
            <div className="bg-white shadow-md rounded-sm flex h-[700px]">
              <div className="w-[350px]">
                <div className="bg-yellow-100 p-4">
                  <h2 className="text-gray-700 font-semibold font-poppins mb-2 text-start">
                    &lt; Post or Reel Comments
                  </h2>
                </div>

                <h1 className="font-poppins font-semibold text-[rgba(62,62,62,1)] -mb-7 mt-7 ml-4">
                  Add Keyword
                </h1>
                <div className="bg-white p-8 rounded-[8px] w-[320px] mx-auto mt-10 border border-gray-200">
                  <div className="mb-2 w-[300px] -mt-5  p-2 -ml-6 rounded-[8px] bg-[rgba(255,255,255,1) border border-gray-200">
                    <label className="block text-gray-400 text-sm mb-2">
                      Comments include these keywords :
                    </label>
                    <div className="flex items-center flex-wrap">
                      {includeKeywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 text-xs rounded-full px-3 py-1 mr-2 mb-2"
                        >
                          <span className="mr-2">{keyword}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveIncludeKeyword(index)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddIncludeKeyword}
                        className="flex items-center bg-white border border-gray-200 text-xs text-gray-500 rounded-full px-3 py-1 mb-2"
                      >
                        <span className="mr-2">+</span> keywords
                      </button>
                    </div>
                  </div>

                  <div className="mb-2 w-[300px] -mt-5  p-2 -ml-6 rounded-[8px] bg-[rgba(255,255,255,1) border border-gray-200 mt-5">
                    <label className="block text-gray-400 text-sm mb-2">
                      Comments exclude these keywords :
                    </label>
                    <div className="flex items-center flex-wrap">
                      {excludeKeywords.map((keyword, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
                        >
                          <span className="mr-2">{keyword}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveExcludeKeyword(index)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddExcludeKeyword}
                       className="flex items-center bg-white border border-gray-200 text-xs text-gray-500 rounded-full px-3 py-1 mb-2"
                      >
                        <span className="mr-2">+</span> keywords
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6 mt-3">
                  <input
                    type="text"
                    placeholder="All Post or Reels"
                    className="w-[310px] ml-5 mr-5 p-2 border-1 border-neutral-50 rounded mb-2 text-sm"
                    style={{
                      border: "1px solid rgba(199, 199, 199, 1)",
                    }}
                  />
                </div>
                <button
                  className="w-[290px] ml-8 mr-5 text-xs font-poppins mt-[171px] bg-[#242565] text-white py-2 rounded"
                  onClick={() =>
                    handleButtonClick("/comment-automation-publicreply")
                  }
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="w-[285px] ml-[265px] mt-[90px]">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <div className="relative bg-white border h-[450px] border-gray-200 rounded-3xl  shadow-md">
                <div className="flex items-center mb-4 p-3">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-medium">Ahmad Geidt</h3>
                  </div>
                </div>
                <div
                  className="bg-cover bg-center h-48 w-full rounded-lg mb-4"
                  style={{ backgroundImage: `url(${Advertise})` }}
                ></div>
                <div className="absolute  mt-2 border w-[285px] h-[240px] top-52 bg-[rgba(255,250,250,1)] rounded-3xl">
                  <div className="mt-4 text-gray-600 text-center font-poppins text-sm">
                    Comments
                  </div>
                  <div className="flex align-baseline ml-5 mt-4">
                    <img
                      src={jacksonprofile}
                      alt="Profile"
                      className="w-5 h-5 rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-[rgba(128,128,128,1)] text-[8.71px] font-poppins font-[500px]">
                        Jackson
                      </div>
                      <div className="text-[rgba(128,128,128,1)] font-[500px] text-[15px] -mt-1">
                        Book
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordInput;
