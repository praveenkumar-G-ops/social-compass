import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import launchAd from "../../assets/images/adsAndCampaign/launchAd.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";
import watch from "../../assets/images/adsAndCampaign/watch.png";
import AdPreviewComp from "../../components/AdsAndCampaign/AdPreviewComp";

const LaunchAdsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const recommendedInterests = [
    "Apple watches",
    "Classic watches",
    "Office watches",
    "Formal watches",
    "Analog watches",
    "Men watches",
  ];

  const handleInterestClick = (interest) => {
    setInterests((prev) => [...prev, interest]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Ads and Campaign"} />
        </div>

        {/* status bar */}
        <div className="flex justify-center items-center mt-14">
          <img src={launchAd} alt="" className="h-[50px]" />
        </div>

        <div className="bg-white mt-10 mx-14 p-6 rounded-lg shadow overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-100% scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-full overflow-y-scroll scrollbar-thin">
          <div className="flex justify-between gap-24 mt-10">
            {/* Left side - Form */}
            <div className="border border-gray-300 rounded-md p-10">
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Product URL"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md placeholder-gray-300"
              />
              <textarea
                placeholder="Caption"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md h-32 placeholder-gray-300"
              ></textarea>
              <input
                type="text"
                placeholder="Hashtags"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md placeholder-gray-300"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {recommendedInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestClick(interest)}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"
                  >
                    {interest} +
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Ad Preview */}

            <AdPreviewComp
              orientation={"right"}
              description={
                "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
              }
              watch={watch}
              footer={"upgrade to ultima select this classic watch now!"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchAdsPage;
