import React, { useState } from "react";
import SidebarComp from "../../components/SidebarComp";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

import profile from "../../assets/images/automation/commentAutomationPage/Profile.png";
import Advertise from "../../assets/images/automation/commentAutomationPage/advertise.png";
import jacksonprofile from "../../assets/images/automation/commentAutomationPage/Jacksonprofile.png";

const PublicReply = () => {
  const [replies, setReplies] = useState([
    "Link sent",
    "Sent! checkout your DM",
    "Boom! link launched to your DM",
  ]);
  const [selectedReply, setSelectedReply] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Automation"));
    navigate(path);
  };

  const addReply = () => {
    setReplies([...replies, ""]);
  };

  const handleReplyChange = (index, value) => {
    const newReplies = [...replies];
    newReplies[index] = value;
    setReplies(newReplies);
  };

  const handleReplyClick = (reply) => {
    setSelectedReply(reply);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-8 -ml-7">
          <h1 className="text-gray-700 text-xl font-semibold font-poppins mb-6 ml-10">
            Automation &gt; Comment automation
          </h1>
          <div className="flex">
            <div className="bg-white shadow-md rounded-sm flex h-[700px]">
              <div className="w-[350px]">
                <div className="bg-yellow-100 p-4">
                  <h2 className="text-gray-700 font-semibold font-poppins mb-2 text-start">
                    &lt; Post or Reel Comments
                  </h2>
                </div>

                <div className="p-4 ">
                  <h3 className="text-gray-700 font-semibold font-poppins mb-4">
                    Public Reply
                  </h3>
                  <div
                    className="mb-6 border border-gray-200 rounded-[8px] pt-5 flex flex-col justify-center"
                  >
                    {replies.map((reply, index) => (
                      <input
                        key={index}
                        type="text"
                        value={reply}
                        onChange={(e) =>
                          handleReplyChange(index, e.target.value)
                        }
                        onClick={() => handleReplyClick(reply)}
                        placeholder="Reply text"
                        className={`w-[290px] ml-3 mr-5 p-2 border border-gray-200 rounded mb-2 text-[14px] text-[rgba(165,165,165,1)] font-poppins font-[500px] ${
                          index === replies.length - 1
                            ? "bg-[rgba(244,244,244,1)]"
                            : ""
                        }`}
                      />
                    ))}
                    <button
                      className="w-[290px] ml-3 mr-5 p-2 border border-gray-200 rounded text-sm text-left mb-9 "
                      onClick={addReply}
                    >
                      + New replies
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="No"
                    className="w-[315px] ml-1 mr-6 p-2 font-poppins rounded text-sm"
                    style={{
                      border: "1px solid rgba(199, 199, 199, 1)",
                      boxShadow: "0px 2px 4px 3px rgba(0, 0, 0, 0.03)",
                    }}
                  />
                  <button
                    className="w-[290px] ml-4 mr-4 text-xs font-poppins bg-[#242565] text-white py-2 rounded mt-[200px]"
                    onClick={() =>
                      handleButtonClick("/comment-automation-replyindm")
                    }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[285px] ml-[265px] mt-[90px]">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <div className="relative bg-white border border-gray-200 rounded-3xl shadow-md">
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
                {selectedReply ? (
                  <div className="absolute top-52 w-[285px] h-[240px] bg-[rgba(255,250,250,1)] rounded-3xl border border-gray-200 p-4">
                    {/* <div className="mt-4 text-gray-600 text-center font-poppins text-sm">Comments</div> */}

                    <div className="flex">
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

                    <div className="flex items-start mt-4 ml-6">
                      <img
                        src={profile}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-[rgba(128,128,128,1)] text-[8.71px] font-poppins font-[500px]">
                          Ahmed Geidt
                        </div>
                        <div className="text-[rgba(128,128,128,1)] font-[500px] text-[15px] -mt-1">
                          {selectedReply}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-52 w-[285px] h-[240px] bg-[rgba(255,250,250,1)] rounded-3xl border border-gray-200">
                    <div className="mt-4 text-gray-600 text-center font-poppins text-sm">
                      Comments
                    </div>
                    <div className="flex justify-center mt-14">
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicReply;
