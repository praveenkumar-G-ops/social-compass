import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useState, useEffect } from "react";
import Heading from "../../components/Styles/Heading";
import profile from "../../assets/images/navbar/profile.png";
import FacebookCalComp from "../../components/ContentManagement/FacebookCalComp";
import InstagramCalComp from "../../components/ContentManagement/InstagramCalComp";

const ContentCalenderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Content Management"));
  }, [dispatch]);

  const [timeFrame, setTimeFrame] = useState("Week");
  const users = ["Soundharya", "A", "B"];
  const days = ["Sunday 11", "Monday 12", "Tuesday 13", "Wednesday 14", "Thursday 15", "Friday 16", "Saturday 17"];

  // Mock data for component placement
  const contentPlacements = {
    0: { type: 'facebook', count: 1 },
    4: { type: 'instagram', count: 1 },
    8: { type: 'instagram', count: 1 },
    11: { type: 'facebook', count: 1 },
    13: { type: 'instagram', count: 3 },
    14: { type: 'facebook', count: 2 },
    16: { type: 'instagram', count: 1 },
    26: { type: 'instagram', count: 1 },
    28: { type: 'facebook', count: 1 },
  };

  const renderDayContent = (dayIndex) => {
    const content = contentPlacements[dayIndex];
    if (!content) return null;

    const components = [];
    for (let i = 0; i < content.count; i++) {
      if (content.type === 'facebook') {
        components.push(<FacebookCalComp key={`fb-${dayIndex}-${i}`} description={"Lorem ipsum dolor sit amet consectetur. Malesuada elementum turpis elementum ."}/>);
      } else if (content.type === 'instagram') {
        components.push(<InstagramCalComp key={`ig-${dayIndex}-${i}`} description={"Lorem ipsum dolor sit amet consectetur. Malesuada elementum turpis elementum ."}/>);
      }
    }
    return components;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          {/* Heading dropdown and toggle button div */}
          <div className="flex justify-between items-center mb-6">
            <Heading text={"Content Calender"} />
            <div className="flex items-center space-x-2">
              {/* Dropdown */}
              <select className="border border-gray-400 rounded-lg text-xs bg-gray-100 text-gray-400 font-poppins">
                <option>All channels</option>
              </select>

              {/* Toggle button  */}
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

          <div className="flex justify-between sticky top-0 bg-gray-100 z-10">
            <Heading text={"February"} /> 
            {/* Dropdown */}
            <div className="flex items-center relative">
              <img
                src={profile}
                className="absolute right-20 h-5 w-5 rounded-full"
              />
              <select className="border h-full w-[250px] border-none bg-gray-100 rounded p-2 pl-5 pr-4 font-poppins text-sm">
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Calendar */}
          <div className="mt-6 bg-white rounded-lg shadow">
            <div className="grid grid-cols-7">
              {days.map((day, index) => (
                <div key={index} className="p-2 border font-semibold text-center">
                  {day}
                </div>
              ))}
              {[...Array(35)].map((_, index) => (
                <div key={index} className="p-2 border min-h-[100px] overflow-y-auto flex flex-col gap-2 pt-5">
                  {renderDayContent(index)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalenderPage;