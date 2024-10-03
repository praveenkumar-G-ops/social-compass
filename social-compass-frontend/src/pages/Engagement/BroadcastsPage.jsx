import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import Button from "../../components/Styles/Button";
import searchIcon from "../../assets/images/navbar/search.png";
import BroadcastProfile from "../../components/Engagement/BroadcastProfile";
import broadcast1 from "../../assets/images/engagement/broadcast1.png";
import broadcast2 from "../../assets/images/engagement/broadcast2.png";
import broadcastMsg from "../../assets/images/engagement/broadcastMsg.png";
import CreateBroadcastPopup from "../../components/Engagement/CreateBroadcastPopup"; // Import the popup component

const BroadcastsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Engagement"));
  }, [dispatch]);

  const [activeButton, setActiveButton] = useState("All messages");
  const [activeItem, setActiveItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Engagement"));
    navigate(path);
  };

  const broadcasts = [
    {
      groupIcon: broadcast1,
      social: "facebook",
      groupName: "Product Discussion Broadcast",
      msg: "Yes or No",
      time: "11:54 AM",
    },
    {
      groupIcon: broadcast2,
      social: "instagram",
      groupName: "Task Management Broadcast",
      msg: "Done",
      time: "12:30 PM",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="mt-5 ml-10">
              <Heading text={"Inbox"} />
            </div>
            <button
              className="bg-gradient-to-r from-[#D62976] via-[#7345CA] to-[#4F5BD5] text-white px-4 py-2 rounded-full"
              onClick={() => handleButtonClick("/automated-response")}
            >
              <FontAwesomeIcon icon={faAtom} className="mr-2" />
              Automated responses
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md h-4/5">
            <div className="flex justify-between items-center border-b">
              <div className="flex p-4 gap-2">
                {["All messages", "Read", "Unread"].map((button) => (
                  <button
                    key={button}
                    className={`px-4 py-2 rounded-md text-sm ${
                      activeButton === button
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setActiveButton(button)}
                  >
                    {button}
                  </button>
                ))}
              </div>
              <div className="mr-5">
                <Button text={"create broadcast"} onClick={() => setShowPopup(true)} />
              </div>
            </div>

            <div className="flex">
              <div className="w-1/3 border-r p-4">
                {/* Search bar */}
                <div className="flex items-center relative mb-4">
                  <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="absolute left-3 h-5 w-5"
                  />
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md w-[350px] h-9 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                    placeholder="Search"
                  />
                </div>

                <div>
                  {broadcasts.map((item, index) => (
                    <div
                      key={index}
                      className={`flex  px-2 cursor-pointer items-center relative ${
                        activeItem === index
                          ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]"
                          : ""
                      }`}
                      onClick={() => setActiveItem(index)}
                    >
                      <BroadcastProfile
                        groupIcon={item.groupIcon}
                        social={item.social}
                        groupName={item.groupName}
                        msg={item.msg}
                        time={item.time}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-2/3 p-4 flex flex-col justify-start items-start">
                {activeItem !== null ? (
                  <>
                    <div className="flex justify-between w-full">
                      <div className="">
                        <h2 className="font-light">
                          {broadcasts[activeItem].groupName}
                        </h2>

                        <p className="text-gray-400 mb-6 text-sm">
                          1k Followers
                        </p>
                      </div>
                      <div>
                        <svg
                          width="24"
                          height="28"
                          viewBox="0 0 24 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.65122 25.8642H14.8492C15.5665 25.8642 16.1486 25.2847 16.1486 24.5707C16.1486 23.8567 15.5665 23.2772 14.8492 23.2772H9.65122C8.9339 23.2772 8.35173 23.8567 8.35173 24.5707C8.35173 25.2847 8.9339 25.8642 9.65122 25.8642ZM20.0471 13.9174V9.04603C20.0471 4.76065 16.558 1.2876 12.2528 1.2876H12.2476C7.94237 1.2876 4.45328 4.76065 4.45328 9.04603V13.9174L1.99203 18.8185C1.79061 19.2194 1.8114 19.6955 2.04791 20.077C2.28572 20.4586 2.70287 20.6902 3.15379 20.6902H21.3466C21.7975 20.6902 22.2147 20.4586 22.4525 20.077C22.689 19.6955 22.7098 19.2194 22.5083 18.8185L20.0471 13.9174ZM17.4481 14.2226C17.4481 14.4231 17.4949 14.621 17.5859 14.8008L19.244 18.1031H5.25637L6.91452 14.8008C7.00548 14.621 7.05225 14.4231 7.05225 14.2226V9.04603C7.05225 6.18998 9.37831 3.87461 12.2476 3.87461H12.2528C15.1221 3.87461 17.4481 6.18998 17.4481 9.04603V14.2226Z"
                            fill="black"
                          />
                          <path
                            d="M22.2694 1.29004L1.12573 26.278"
                            stroke="black"
                            strokeWidth="2.88323"
                          />
                        </svg>
                      </div>
                    </div>
                    {activeItem === 0 ? (
                      <div>

                     
                      <div className="border border-gray-300 p-3 rounded-lg">
                        <img
                          src={broadcastMsg}
                          alt="Broadcast Message"
                          className="rounded-lg mb-4 h-48"
                        />
                        <div className="flex flex-col gap-2">
                          <a
                            href="https://www.youtube.com/watch?v=am2K2R08GIA&t=98s"
                            className="text-blue-500"
                          >
                            https://www.youtube.com/watch?v=am2K2R08GIA&t=98s
                          </a>

                        </div>
                        
                      </div>
                      <div className="bg-gray-200 p-2 rounded-md w-max my-2">
                            These side quests have the best dialogues.
                          </div>
                          <div className="bg-gray-200 p-2 rounded-md w-max">
                            Yes or no
                          </div>
                      </div>
                    ) : (
                      <p className="text-gray-700">No messages to display</p>
                    )}
                  </>
                ) : (
                  <p className="text-gray-700">
                    Select a broadcast to view details
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <CreateBroadcastPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default BroadcastsPage;
