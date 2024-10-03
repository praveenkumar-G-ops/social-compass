import { useState } from "react";
import Navbar from "../components/Navbar";
import SettingsSidebar from "../components/Settings/SettingsSidebar";
import BusinessPortfolioInfo from "../components/Settings/BusinessPortfolioInfo";
import SetupGuide from "../components/Settings/SetupGuide";
import BusinessAssets from "../components/Settings/BusinessAssets";
import AuthorizationVerification from "../components/Settings/AuthorizationVerification";
import LanguageSettings from "../components/Settings/LanguageSettings";
import Heading from "../components/Styles/Heading";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Business portfolio info");

  const renderContent = () => {
    switch (activeTab) {
      case "Business portfolio info":
        return <BusinessPortfolioInfo />;
      case "Setup guide":
        return <SetupGuide />;
      case "Business assets":
        return <BusinessAssets />;
      case "Authorization and verf.":
        return <AuthorizationVerification />;
      case "Language settings":
        return <LanguageSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-[#F5F6FA]">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Navbar /> */}
        <div className="flex-1 overflow-y-auto">
          <div className="mt-10 ml-14 mb-20">
          <Heading text={"Settings > "+ activeTab}/>
          </div>
          
          <div className="flex gap-4 h-1/2">
            <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className=" bg-white rounded-lg shadow">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
