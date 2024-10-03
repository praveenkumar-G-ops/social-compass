import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import adPreview from "../../assets/images/adsAndCampaign/adPreview.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useState, useEffect } from "react";
import AdPreviewComp from "../../components/AdsAndCampaign/AdPreviewComp";
import watch from "../../assets/images/adsAndCampaign/watch.png";
import profile from "../../assets/images/navbar/profile.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import Button from "../../components/Styles/Button";
import { useNavigate } from "react-router-dom";

const AdPreviewPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const users = ["Soundharya", "A", "B"];
  const [selected, setSelected] = useState("Facebook");

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Ads and Campaign"} />
        </div>

        {/* status bar */}
        <div className="flex justify-center items-center mt-14">
          <img src={adPreview} alt="" className="h-[50px]" />
        </div>

        <div className="bg-white w-[90%] mt-10 mx-14 p-6 rounded-lg shadow overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-100% scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-full overflow-y-scroll scrollbar-thin">
          <div className="flex justify-between mt-10">
            {/* emptydiv */}
            <div className="w-1/4"></div>

            {/* toggle button */}

            <div className="flex bg-gray-200  rounded-md p-1 border border-gray-200">
              <button
                className={`flex items-center rounded-md px-5 font-poppins py-3 mr-1 ${
                  selected === "Facebook" ? "bg-white" : "bg-gray-200"
                }`}
                onClick={() => setSelected("Facebook")}
              >
                <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                <span
                  className={`text-xs font-poppins ${
                    selected === "Facebook" ? "text-black" : "text-gray-500"
                  }`}
                >
                  Facebook
                </span>
              </button>
              <button
                className={`flex items-center rounded-md px-3 py-1 ${
                  selected === "Instagram" ? "bg-white" : "bg-gray-200"
                }`}
                onClick={() => setSelected("Instagram")}
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5 mr-2" />
                <span
                  className={`text-xs font-poppins ${
                    selected === "Instagram" ? "text-black" : "text-gray-500"
                  }`}
                >
                  Instagram
                </span>
              </button>
            </div>

            {/* Dropdown */}
            <div className="flex items-center relative">
              <img
                src={profile}
                className="absolute right-20 h-5 w-5 rounded-full"
              />
              <select className="border h-full w-[250px] border-gray-300 rounded p-2 pl-5 pr-4 font-poppins text-sm">
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ad-preview comp */}
          <div className="flex gap-4 mt-20 px-8">
            <AdPreviewComp
              orientation={"right"}
              description={
                "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
              }
              watch={watch}
              footer={"upgrade to ultima select this classic watch now!"}
            />
            <AdPreviewComp
              orientation={"left"}
              description={
                "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
              }
              watch={watch}
              footer={"upgrade to ultima select this classic watch now!"}
            />
            <AdPreviewComp
              orientation={"right"}
              description={
                "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
              }
              watch={watch}
              footer={"upgrade to ultima select this classic watch now!"}
            />
          </div>

          <div className="flex justify-end mt-6">
            <Button text="Next step" onClick={()=>{navigate("/targetting")}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPreviewPage;
