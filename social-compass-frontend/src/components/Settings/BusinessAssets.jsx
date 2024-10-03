import { useState } from "react";
import Button from "../../components/Styles/Button";
import profile from "../../assets/images/navbar/profile.png";
import searchIcon from "../../assets/images/navbar/search.png";

const BusinessAssets = () => {
  const [selectedBtn, setSelectedBtn] = useState("All assets");

  return (
    <div className="p-5 w-[800px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className={`px-4 py-2 rounded-md mr-2 border font-poppins text-xs ${
              selectedBtn === "All assets"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => {
              setSelectedBtn("All assets");
            }}
          >
            All assets
          </button>
          <button
            className={`px-4 py-2 rounded-md mr-2 border font-poppins text-xs ${
              selectedBtn === "Instagram accounts"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => {
              setSelectedBtn("Instagram accounts");
            }}
          >
            Instagram accounts
          </button>
          <button
            className={`px-4 py-2 rounded-md mr-2 border font-poppins text-xs ${
              selectedBtn === "Facebook accounts"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => {
              setSelectedBtn("Facebook accounts");
            }}
          >
            Facebook accounts
          </button>
        </div>
        {/* Search bar */}
        <div className="flex items-center relative">
          <img
            src={searchIcon}
            alt=" Icon"
            className="absolute left-3 h-3 w-3"
          />
          <input
            type="text"
            className="border border-gray-300 rounded-md  w-[150px] h-6 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
            placeholder="Search"
          />
        </div>
        <Button text={"Add asset"} />
      </div>

      <div className="">
        <div className="flex p-4 border-b text-sm font-semibold text-gray-500">
          <div className="">Name</div>
          <div className="ml-[200px]">People with full con...</div>
          <div className="ml-[40px]">People with Partial con...</div>
          <div className="ml-[60px]">Status</div>
        </div>

        <div className="grid grid-cols-4 p-4 items-center">
          <div className="flex items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-poppin text-gray-700">@Soundharaya</p>
              <p className="text-sm text-gray-500">Instagram account</p>
            </div>
          </div>
          <div className="ml-[100px]">1 Person</div>
          <div className="ml-[100px]">0 People</div>
          <div>
            <span className="bg-orange-100 ml-[80px] text-orange-600 px-2 py-1 rounded-full text-xs">
              Review needed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAssets;
