import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useState, useEffect } from "react";
import Heading from "../../components/Styles/Heading";
import searchIcon from "../../assets/images/navbar/search.png";
import Ideas from "../../components/ContentManagement/Ideas";
import Pending from "../../components/ContentManagement/Pending";
import contApproval1 from "../../assets/images/contentManagement/contApproval1.png";
import contApproval2 from "../../assets/images/contentManagement/contApproval2.png";
import contApproval3 from "../../assets/images/contentManagement/contApproval3.png";
import Approved from "../../components/ContentManagement/Approved";
import QueuedPosts from "../../components/ContentManagement/QueuedPosts";

const ContentApprovalPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Content Management"));
  }, [dispatch]);

  const [timeFrame, setTimeFrame] = useState("Week");
  const [activeTab, setActiveTab] = useState("Ideas");

  const buttons = ["Ideas", "Pending", "Approved", "Queued post"];

  return (
    <div className="flex h-screen bg-gray-100 ">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          {/* Heading dropdown and toggle button div */}
          <div className="flex justify-between items-center mb-6">
            <Heading text={"Content Approval"} />
            <div className="flex items-center space-x-2">
              {/* Dropdown */}
              <select className="border border-gray-400 rounded-lg text-xs bg-gray-100 text-gray-400 font-poppins">
                <option>All channels</option>
              </select>

              {/* Toggle button */}
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

          <div className="bg-white px-4 py-2 mb-8">
            {/* Toggle buttons */}
            <div className="flex space-x-4 mb-4">
              {buttons.map((button) => (
                <button
                  key={button}
                  className={`px-4 py-2 ${
                    activeTab === button ? "border-b-4 border-[#242565]" : ""
                  }`}
                  onClick={() => setActiveTab(button)}
                >
                  {button}
                </button>
              ))}
            </div>

            {/* Search and dropdown div */}
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
              {/* Search bar */}
              <div className="flex items-center relative">
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="absolute left-3 h-5 w-5"
                />
                <input
                  type="text"
                  className="border border-gray-400 rounded-md w-[900px] h-10 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
                  placeholder="Search"
                />
              </div>

              {/* Drop down */}
              <select className="border border-gray-400 rounded">
                <option>Post</option>
              </select>
            </div>
          </div>

          {/* rendering UI according to button selected */}
          <div className="bg-white w-full h-3/4 overflow-y-auto">
            {activeTab === "Ideas" && (
              <div>
                <div className="flex my-5 shadow-xl h-[40px]">
                  <div className="text-gray-500 font-medium font-poppins ml-8">
                    Topic
                  </div>
                  <div className="text-gray-500 font-medium font-poppins ml-[320px]">
                    Type
                  </div>
                  <div className="text-gray-500 font-medium font-poppins ml-[100px]">
                    Account
                  </div>
                  <div className="text-gray-500 font-medium font-poppins ml-[200px]">
                    Status
                  </div>
                </div>
                <Ideas
                  topic={"Top campanies startedy for suc........."}
                  type={"Post"}
                  account={"instagram"}
                />
                <Ideas
                  topic={"Top campanies startedy for suc........."}
                  type={"Story"}
                  account={"facebook"}
                />
                <Ideas
                  topic={"Top campanies startedy for suc........."}
                  type={"Post"}
                  account={"instagram"}
                />
                <Ideas
                  topic={"Top campanies startedy for suc........."}
                  type={"Story"}
                  account={"facebook"}
                />
              </div>
            )}

            {activeTab === "Pending" && (
              <div>
                <Pending
                  image={contApproval1}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Pending
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Pending
                  image={contApproval3}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Pending
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
              </div>
            )}

            {activeTab === "Approved" && (
              <div>
                <Approved
                  image={contApproval1}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Approved
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Approved
                  image={contApproval3}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <Approved
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
              </div>
            )}

            {activeTab === "Queued post" && (
              <div>
                <QueuedPosts
                  image={contApproval1}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <QueuedPosts
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <QueuedPosts
                  image={contApproval3}
                  title={"Plaza with an ornate palace complex"}
                  account={"facebook"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
                <QueuedPosts
                  image={contApproval2}
                  title={"Plaza with an ornate palace complex"}
                  account={"instagram"}
                  type={"Post"}
                  date={"feb 20, 2024 2.00PM"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentApprovalPage;
