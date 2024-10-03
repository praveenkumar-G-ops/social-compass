import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarItem } from "../redux/sidebar/sidebarSlice";
import dashboardImage from "../assets/images/sidebar/dashboard.png";
import createAndScheduleImage from "../assets/images/sidebar/createAndSchedule.png";
import contentManagementImage from "../assets/images/sidebar/contentManagement.png";
import engagementImage from "../assets/images/sidebar/engagement.png";
import automationImage from "../assets/images/sidebar/automation.png";
import adsAndCampaignImage from "../assets/images/sidebar/adsAndCampaign.png";
import contentLibraryImage from "../assets/images/sidebar/contentLibrary.png";
import analyticsAndReportImage from "../assets/images/sidebar/analyticsAndReport.png";
import competitorAnalysisImage from "../assets/images/sidebar/competitorAnalysis.png";
import manageImage from "../assets/images/sidebar/manage.png";
import logoutImage from "../assets/images/sidebar/logout.png";

import DashboardPage from "../pages/DashboardPage";
import CreateAndSchedulePage from "../pages/CreateAndSchedulePage";
import ContentManagementPage from "../pages/ContentManagementPage";
import EngagementPage from "../pages/EngagementPage";
import AutomationPage from "../pages/AutomationPage";
import AdsAndCampaignPage from "../pages/AdsAndCampaignPage";
import ContentLibraryPage from "../pages/ContentLibraryPage";
import AnalyticsAndReportPage from "../pages/AnalyticsAndReportPage";
import CompetitorAnalysisPage from "../pages/CompetitorAnalysisPage";
import ManagePage from "../pages/ManagePage";

import CreateAndScheduleHoverButtons from "./SidebarHoverButtons/CreateAndScheduleHoverButtons";
import ContentManagementHoverButtons from "./SidebarHoverButtons/ContentManagementHoverButtons";
import EngagementHoverButtons from "./SidebarHoverButtons/EngagementHoverButtons";
import AdsCampaignHoverButtons from "./SidebarHoverButtons/AdsCampaignHoverButtons";
import ContentLibraryHoverButtons from "./SidebarHoverButtons/ContentLibraryHoverButtons";
import CompetitorAnalysisHoverButtons from "./SidebarHoverButtons/CompetitorAnalysisHoverButtons";
import LogoutPopup from "./LogoutPopup";  

const sidebarItems = [
  { image: dashboardImage, label: "Dashboard" },
  { image: createAndScheduleImage, label: "Create and schedule" },
  { image: contentManagementImage, label: "Content Management" },
  { image: engagementImage, label: "Engagement" },
  { image: automationImage, label: "Automation" },
  { image: adsAndCampaignImage, label: "ADs and Campaign" },
  { image: contentLibraryImage, label: "Content library" },
  { image: analyticsAndReportImage, label: "Analytics and Reports" },
  { image: competitorAnalysisImage, label: "Competitor Analysis" },
  { image: manageImage, label: "Manage" },

  { image: logoutImage, label: "Logout" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.sidebar.sidebarItem);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <DashboardPage />;
      case "Create and schedule":
        return <CreateAndSchedulePage />;
      case "Content Management":
        return <ContentManagementPage />;
      case "Engagement":
        return <EngagementPage />;
      case "Automation":
        return <AutomationPage />;
      case "ADs and Campaign":
        return <AdsAndCampaignPage />;
      case "Content library":
        return <ContentLibraryPage />;
      case "Analytics and Reports":
        return <AnalyticsAndReportPage />;
      case "Competitor Analysis":
        return <CompetitorAnalysisPage />;
      case "Manage":
        return <ManagePage />;
      
      default:
        return null;
    }
  };

  const renderHoverButtons = (label) => {
    switch (label) {
      case "Create and schedule":
        return <CreateAndScheduleHoverButtons />;
      case "Content Management":
        return <ContentManagementHoverButtons />;
      case "Engagement":
        return <EngagementHoverButtons />;
      case "ADs and Campaign":
        return <AdsCampaignHoverButtons />;
      case "Content library":
        return <ContentLibraryHoverButtons />;
      case "Competitor Analysis":
        return <CompetitorAnalysisHoverButtons />;
      default:
        return null;
    }
  };

  const handleSidebarItemClick = (label) => {
    if (label === "Logout") {
      setShowLogoutPopup(true);
    } else {
      dispatch(setSidebarItem(label));
    }
  };


  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  const confirmLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="flex">
      <div className="w-[256px] h-screen p-6 relative  ">
        <ul className="gap-1">
          <li className="font-bold text-2xl pb-10">LOGO</li>
          {sidebarItems.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className={`flex py-3 px-4 cursor-pointer items-center relative ${
                activeItem === item.label ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]" : ""
              }`}
              onClick={() => handleSidebarItemClick(item.label)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img src={item.image} alt={item.label} className="h-5 w-5" />
              <li className="pl-4 text-sm">{item.label}</li>
              {hoveredItem === item.label && renderHoverButtons(item.label)}
              {hoveredItem === item.label && renderHoverButtons(item.label)}
            </div>
          ))}
          <div className="pt-5">
            {sidebarItems.slice(10).map((item, index) => (
              <div
                key={index}
                className={`flex py-2 px-1 cursor-pointer items-center ${
                  activeItem === item.label ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]" : ""
                }`}
                onClick={() => handleSidebarItemClick(item.label)}
              >
                <img src={item.image} alt={item.label} className="h-5 w-5" />
                <li className="pl-4 text-sm">{item.label}</li>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className="flex-grow ">
        {renderContent()}
        {showLogoutPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <LogoutPopup onClose={closeLogoutPopup} onConfirm={confirmLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

