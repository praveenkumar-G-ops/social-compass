import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faLightbulb,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import phoneimage from "../assets/images/engagement/Phone.png";
import Heading from "../components/Styles/Heading";
import Button from "../components/Styles/Button";
import SubHeading from "../components/Styles/SubHeading";
import Description from "../components/Styles/Description";
import searchIcon from "../assets/images/navbar/search.png";

const EngagementPage = ()=>{
  const [activeButton, setActiveButton] = useState("All messages");
  
    return (
        <div className="flex h-screen bg-gray-100">
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
                {/* Search bar */}
                <div className="flex items-center relative">
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
                <div className="flex flex-col items-center">
                  <img
                    src={phoneimage}
                    alt="No messages"
                    className="w-64 h-64 mb-5 p-4"
                  />
                  <SubHeading text={"No messages"} />
                  <div className="my-1">
                    <Description
                      text={"Messages sent to you will appear here"}
                    />
                  </div>

                  <div className="mt-5 mb-2">
                    <Button text={"Connect Accounts"} />
                  </div>

                  <Description
                    text={"Connect accounts receive comments, messages"}
                  />
                </div>
              </div>

              <div className="w-2/3 p-4 flex justify-end items-end">
                <div className="mt-4 w-full bg-white shadow-md p-4 border-l-4 border-orange-500 flex items-center">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-orange-500 mr-5"
                  />
                  <div>
                    <p className="font-semibold font-poppins text-sm">
                      Create a post receive more messages
                    </p>
                    <a href="#" className="text-blue-500 text-xs">
                      See More
                    </a>
                  </div>
                  <button className="ml-auto text-gray-500">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      );
}

export default EngagementPage;