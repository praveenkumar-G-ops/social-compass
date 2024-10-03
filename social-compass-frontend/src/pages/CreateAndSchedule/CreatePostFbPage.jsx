import { useState } from "react";
import {
  RiHashtag,
  RiEmotionHappyLine,
  RiHeartLine,
  RiChat3Line,
  RiSendPlaneLine,
} from "react-icons/ri";
import instagrampreview from "../../assets/images/createAndSchedule/naturephoto.png";
import profile from "../../assets/images/navbar/profile.png";
import InstagramFeedPreview from "../../components/CreateAndSchedule/InstagramFeedPreview";
import Navbar from "../../components/Navbar";
import CreatePostStoryPage from "./CreatePostStoryPage";
import MediaTab from "../../components/CreateAndSchedule/MediaTab";
import BoostTab from "../../components/CreateAndSchedule/BoostTab";
import SidebarComp from "../../components/SidebarComp";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";
import Heading from "../../components/Styles/Heading";

const CreatePost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Create and schedule"));
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("Post");

  const handleTabClick = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {activeTab == "Story" ? (
          <CreatePostStoryPage />
        ) : (
          <div className="w-full bg-gray-100 ">
            <div className="mt-5 ml-14 mb-2">
              <Heading text={"Create Post"} />
            </div>
            <div className="flex flex-row ml-20">
              <div className="w-[680px] p-6 flex flex-col -mt-2">
                <div className="flex bg-gray-100 mb-0 justify-between ">
                  <button
                    className={`text-xl font-semibold py-2 px-6 rounded-t-lg w-36 ${
                      activeTab === "Post"
                        ? "text-white bg-[#242565]"
                        : "bg-gray-100 text-[#242565] hover:bg-[#242565] hover:text-white"
                    }`}
                    onClick={() => handleTabClick("Post")}
                  >
                    Post
                  </button>
                  <button
                    className={`text-xl font-semibold py-2 px-6 rounded-t-lg w-36 ${
                      activeTab === "Reels"
                        ? "text-white bg-[#242565]"
                        : "bg-gray-100 text-[#242565] hover:bg-[#242565] hover:text-white"
                    }`}
                    onClick={() => handleTabClick("Reels")}
                  >
                    Reels
                  </button>
                  <button
                    className={`text-xl font-semibold py-2 px-6 rounded-t-lg w-36 ${
                      activeTab === "Story"
                        ? "text-white bg-[#242565]"
                        : "bg-gray-100 text-[#242565] hover:bg-[#242565] hover:text-white"
                    }`}
                    onClick={() => handleTabClick("Story")}
                  >
                    Story
                  </button>
                </div>
                <div className="bg-white flex flex-col min-h-[660px] rounded-md">
                  <div
                    className="border border-gray-200 p-7 ml-6 mr-6 rounded-lg shadow-lg mt-4 h-52"
                    style={{
                      boxShadow: "0 3px 5.6px 0px rgba(0, 0, 0, 0.25)",
                      border: "1px rgba(215, 215, 215, 1)",
                    }}
                  >
                    <h3 className="text-lg font-poppins  font-semibold -mt-4 mb-2 text-gray-700">
                      Post details
                    </h3>
                    <h1 className="font-poppins">Caption</h1>
                    <div className="relative mt-2">
                      <textarea
                        className="w-full h-24 border border-gray-300 rounded-sm p-4 pt-10 resize-none"
                        rows="4"
                      ></textarea>
                      {/* <label className="absolute top-0 left-0 ml-4 mt-4 text-gray-500">Caption</label> */}
                      <div className="absolute bottom-0 right-0 mb-4 mr-4 flex space-x-2">
                        <svg
                          className="text-gray-500 w-6 h-6"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5013 2.78316C12.2196 2.78316 12.9085 2.49782 13.4164 1.98991C13.9243 1.482 14.2096 0.793124 14.2096 0.0748291H15.4596C15.4596 0.793124 15.745 1.482 16.2529 1.98991C16.7608 2.49782 17.4497 2.78316 18.168 2.78316V4.03316C17.4497 4.03316 16.7608 4.3185 16.2529 4.82641C15.745 5.33433 15.4596 6.0232 15.4596 6.7415H14.2096C14.2096 6.0232 13.9243 5.33433 13.4164 4.82641C12.9085 4.3185 12.2196 4.03316 11.5013 4.03316V2.78316ZM2.33464 4.2415C2.33464 3.79947 2.51023 3.37555 2.82279 3.06298C3.13535 2.75042 3.55927 2.57483 4.0013 2.57483H9.83463V0.908162H4.0013C3.11725 0.908162 2.2694 1.25935 1.64428 1.88447C1.01916 2.50959 0.667969 3.35744 0.667969 4.2415V12.5748C0.667969 13.4589 1.01916 14.3067 1.64428 14.9319C2.2694 15.557 3.11725 15.9082 4.0013 15.9082H14.0013C14.8854 15.9082 15.7332 15.557 16.3583 14.9319C16.9834 14.3067 17.3346 13.4589 17.3346 12.5748V8.40816H15.668V12.5748C15.668 13.0169 15.4924 13.4408 15.1798 13.7533C14.8673 14.0659 14.4433 14.2415 14.0013 14.2415H4.0013C3.55927 14.2415 3.13535 14.0659 2.82279 13.7533C2.51023 13.4408 2.33464 13.0169 2.33464 12.5748V4.2415Z"
                            fill="url(#paint0_linear_248_3794)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_248_3794"
                              x1="9.41797"
                              y1="0.0748291"
                              x2="9.41797"
                              y2="15.9082"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF09C9" />
                              <stop offset="1" stopColor="#666666" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <RiHashtag className="text-gray-500 w-6 h-6" />
                        <RiEmotionHappyLine className="text-gray-500 w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <MediaTab />
                  </div>

                  <div
                    className="p-3 ml-6 mr-6 rounded-lg shadow-lg mt-3 flex justify-between items-center bg-white"
                    
                  >
                    <h3 className="text-lg font-semibold text-gray-700">
                      Tag people
                    </h3>
                    <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg text-gray-600 bg-white">
                      <span>Add Collaborators</span>
                    </button>
                  </div>

                  <div
                    className="p-3 ml-6 mr-6 rounded-lg shadow-lg mt-3 flex justify-between items-center bg-white"
                    
                  >
                    <h3 className="text-lg font-semibold text-gray-700">
                      Scheduling options
                    </h3>
                    <div className="flex items-center space-x-4 ">
                      <span className="text-gray-700 font-poppins">
                        Set date and time
                      </span>
                      <div
                        onClick={handleToggle}
                        className="flex items-center w-10 h-6 bg-white border rounded-full p-1 cursor-pointer"
                      >
                        <div
                          className={`w-4 h-4 bg-[#484848] rounded-full shadow-md transform transition-transform duration-300 ${
                            isOn ? "translate-x-4" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <BoostTab />
                </div>
              </div>

              <div className="ml-28 mt-[50px]">
                <h3 className="text-lg font-semibold mb-6">
                  Facebook Feed Preview
                </h3>
                {activeTab === "Reels" ? (
                  <InstagramFeedPreview />
                ) : (
                  <div className="w-72  bg-white rounded-lg shadow-lg">
                    <div className="flex items-center p-4 h-10 border-b border-gray-200">
                      <img
                        src={profile}
                        alt="Profile"
                        className="w-6 h-6 rounded-full mr-3"
                      />
                      <span className="font-poppins">Soundharya</span>
                    </div>
                    <div
                      className="flex justify-center items-center bg-gray-100"
                      style={{ height: "280px" }}
                    >
                      <img
                        src={instagrampreview}
                        alt="Instagram Preview"
                        className="grayscale"
                      />
                    </div>
                    <div className="flex justify-between items-center p-4 border-t h-10 border-gray-200">
                      <div className="flex gap-2 w-full">
                        <RiHeartLine className="text-xl text-gray-600" />
                        <RiChat3Line className="text-xl text-gray-600" />
                        <RiSendPlaneLine className="text-xl text-gray-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
