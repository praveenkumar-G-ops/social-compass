import React from "react";
import { useState } from "react";

const BoostTab = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className="p-3 ml-6 mr-6 rounded-lg shadow-lg mt-3 flex justify-between items-center bg-white"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex items-center">
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
      <div className="flex space-x-2">
        <button className="px-4 py-2 w- border border-gray-300 text-gray-800 rounded-lg">
          Cancel
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg">
          Move to ideas
        </button>
        <button className="px-4 py-2 bg-blue-200 text-blue-700 rounded-lg">
          Send to review
        </button>
      </div>
    </div>
  );
};

export default BoostTab;
