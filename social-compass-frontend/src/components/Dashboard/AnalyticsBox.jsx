import React from "react";
import { SlGraph } from "react-icons/sl";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnalyticsBox = ({ title, value, increment, percentage, pathColor }) => {
  return (
    <div className="border bg-white rounded-3xl p-4 flex justify-between items-center w-64">
      <div>
        <div className="text-gray-400 font-poppins mb-2">{title}</div>
        <div className="text-2xl font-poppins">{value}</div>
        <div className="flex items-center mt-2">
          <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5482 5.4264C13.4733 5.24288 13.3236 5.09174 13.1418 5.01617C13.0563 4.98378 12.96 4.96219 12.8638 4.96219H10.8748C10.4578 4.96219 10.1263 5.29685 10.1263 5.71788C10.1263 6.13891 10.4578 6.47358 10.8748 6.47358H11.0673L8.81097 8.75145L7.72024 7.11052C7.59192 6.92699 7.39943 6.79745 7.17487 6.77585C6.93962 6.75426 6.73644 6.82983 6.57604 6.99177L3.38939 10.2089C3.10067 10.5003 3.10067 10.9754 3.38939 11.2776C3.5391 11.4288 3.72089 11.4935 3.91337 11.4935C4.10585 11.4935 4.29834 11.418 4.43735 11.2776L6.98239 8.70827L8.07312 10.3492C8.20144 10.5327 8.39393 10.6623 8.61849 10.6839C8.85374 10.7055 9.05692 10.6299 9.21732 10.468L12.1259 7.53155V7.72587C12.1259 8.1469 12.4574 8.48156 12.8745 8.48156C13.2915 8.48156 13.623 8.1469 13.623 7.72587V5.70709C13.6016 5.60993 13.5909 5.51277 13.5482 5.4264Z"
                fill="#FFA600"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600 ml-2">+{increment}% Inc</div>
        </div>
      </div>
      <div className="w-16 h-16">
        <CircularProgressbar
          value={percentage}
          text={`+${percentage}%`}
          styles={buildStyles({
            textSize: "24px",
            pathColor: { pathColor },
            textColor: "#333",
            trailColor: "#d1d5db",
          })}
        />
      </div>
    </div>
  );
};

export default AnalyticsBox;
