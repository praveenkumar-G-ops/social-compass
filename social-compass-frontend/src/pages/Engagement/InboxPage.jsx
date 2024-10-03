import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import UserProfile from "../../components/Engagement/UserProfile";
import searchIcon from "../../assets/images/navbar/search.png";
import user1 from "../../assets/images/engagement/user1.png";
import user2 from "../../assets/images/engagement/user2.png";
import post from "../../assets/images/engagement/post.png";
import ChatInterface from "../../components/Engagement/ChatInterface";
import InboxUser from "../../components/Engagement/InboxUser";
import InboxChatInterface from "../../components/Engagement/InboxChatInterface";

const InboxPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Engagement"));
  }, [dispatch]);

  const [activeButton, setActiveButton] = useState("All messages");
  const [activeItem, setActiveItem] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Engagement"));
    navigate(path);
  };

  const users = [
    {
      profileIcon: user1,
      profileName: "Kierra Stanton",
      msg: "Lorem ipsum dolor sit amet consectetur. - yes - Lorem ipsum dolor sit amet consectetur.",
      time: "11:54 AM",
    },
    {
      profileIcon: user2,
      profileName: "Ahmad Geidt",
      msg: "Lorem ipsum dolor sit amet consectetur. - yes - Lorem ipsum dolor sit amet consectetur.",
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

          <div className="bg-white rounded-lg shadow-md">
            <div className="flex p-4 gap-2 border-b">
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

            <div className="flex">
              <div className="w-1/3 border-r p-4">
                <div className="flex items-center relative mb-4">
                  <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="absolute left-3 h-5 w-5"
                  />
                  <input
                    type="text"
                    className="border border-gray-500 rounded-md w-full h-9 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                    placeholder="Search"
                  />
                </div>

                <div>
                  {users.map((item, index) => (
                    <div
                      key={index}
                      className={`flex px-2 cursor-pointer items-center relative ${
                        activeItem === index
                          ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveItem(index);
                        setSelectedUser(item);
                      }}
                    >
                      <InboxUser
                        profileIcon={item.profileIcon}
                        profileName={item.profileName}
                        msg={item.msg}
                        time={item.time}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-2/3 p-4 h-[600px]">
                <InboxChatInterface selectedUser={selectedUser} />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
