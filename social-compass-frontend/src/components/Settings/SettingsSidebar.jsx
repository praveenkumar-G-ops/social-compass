import businessPortfolio from "../../assets/images/settings/businessPortfolio.png";
import authAndVeri from "../../assets/images/settings/authAndVeri.png";
import businessAssets from "../../assets/images/settings/businessAssets.png";
import language from "../../assets/images/settings/language.png";
import setupGuide from "../../assets/images/settings/setupGuide.png";

const SettingsSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { image: businessPortfolio, label: "Business portfolio info" },
    { image: setupGuide, label: "Setup guide" },
    { image: businessAssets, label: "Business assets" },
    { image: authAndVeri, label: "Authorization and verf." },
    { image: language, label: "Language settings" },
  ];

  return (
    <div className="w-72 bg-white p-4 h-[620px] scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`w-full text-left py-3 px-4 flex gap-2 mb-2 ${
            activeTab === tab.label
              ? "bg-[#F5F6FA] border-r-4 border-[#0A075F] "
              : ""
          }`}
          onClick={() => setActiveTab(tab.label)}
        >
          <img src={tab.image} alt={tab.label} className="h-5 w-5 mt-[1px]" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsSidebar;
