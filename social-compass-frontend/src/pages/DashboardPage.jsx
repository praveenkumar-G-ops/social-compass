import React, { useEffect, useState } from "react";
import ProfileReport from "../components/Dashboard/ProfileReport";
import person from "../assets/images/dashboard/person.png";
import TotalRevenue from "../components/Dashboard/TotalRevenue";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const DashboardPage = () => {
  const [profileReport, setProfileReport] = useState({
    title: "Profile Report",
    year: "2021",
    value: "12k",
    percentage: 68.2,
  });
  const [replies, setReplies] = useState({
    title: "Replies",
    value: "40",
    increment: "14",
    percentage: 79,
  });
  const [engagement, setEngagement] = useState({
    title: "Engagement",
    value: "100",
    increment: "14",
    percentage: 74,
  });
  const [audienceRetention, setAudienceRetention] = useState({
    title: "Audience retention",
    value: "330",
    increment: "14",
    percentage: 74,
  });
  const [username, setUsername] = useState("Soundharaya");

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <div className="flex-1 overflow-y-auto p-6  scrollbar-thumb-rounded-full  scrollbar-track-rounded-100% scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          <div className="grid grid-cols-4 gap-6 ">
            {/* Congratulations Card */}
            <div className="col-span-3 bg-white rounded-lg shadow px-6 h- mt-5 h-[170px]">
              <div className="flex justify-between items-center ">
                <div>
                  <h2 className="text-lg font-bold font-poppins text-[#242565]">
                    Congratulations {username}!
                  </h2>
                  <p className="text-gray-400 font-medium mt-5 font-poppins ">
                    You have done 72% more sales today. Check your new badge in
                    your profile.
                  </p>
                  
                </div>
                <div className="w-40 h-36 mt-4  ">
                  <img src={person} alt="" className=""/>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {/* Profile Report */}
              <ProfileReport
                title={profileReport.title}
                year={profileReport.year}
                value={profileReport.value}
                percentage={profileReport.percentage}
              />
            </div>

            {/* Total Revenue Chart */}
            <div className="col-span-3 bg-white rounded-lg shadow p-6">
              <TotalRevenue />
            </div>

            {/* Analytics Boxes */}
            <div className="space-y-5">
              {/* Replies */}
              <div className="border bg-white rounded-3xl p-4 flex justify-between items-center w-64">
                <div>
                  <div className="text-gray-400 font-poppins mb-2">
                    Profile Report
                  </div>
                  <div className="text-2xl font-poppins">40</div>
                  <div className="flex items-center mt-2">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        width="27"
                        height="25"
                        viewBox="0 0 27 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12.3971"
                          cy="12.5308"
                          r="11.7564"
                          fill="#FF8B61"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M17.5482 9.72929C17.4733 9.54576 17.3236 9.39462 17.1418 9.31905C17.0563 9.28667 16.96 9.26508 16.8638 9.26508H14.8748C14.4578 9.26508 14.1263 9.59974 14.1263 10.0208C14.1263 10.4418 14.4578 10.7765 14.8748 10.7765H15.0673L12.811 13.0543L11.7202 11.4134C11.5919 11.2299 11.3994 11.1003 11.1749 11.0787C10.9396 11.0571 10.7364 11.1327 10.576 11.2947L7.38939 14.5118C7.10067 14.8032 7.10067 15.2782 7.38939 15.5805C7.5391 15.7317 7.72089 15.7964 7.91337 15.7964C8.10585 15.7964 8.29834 15.7209 8.43735 15.5805L10.9824 13.0112L12.0731 14.6521C12.2014 14.8356 12.3939 14.9652 12.6185 14.9868C12.8537 15.0083 13.0569 14.9328 13.2173 14.7708L16.1259 11.8344V12.0288C16.1259 12.4498 16.4574 12.7844 16.8745 12.7844C17.2915 12.7844 17.623 12.4498 17.623 12.0288V10.01C17.6016 9.91281 17.5909 9.81565 17.5482 9.72929Z"
                          fill="#FF8B61"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 ml-2">+14% Inc</div>
                  </div>
                </div>
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value="74"
                    text={`+74%`}
                    styles={buildStyles({
                      textSize: "24px",
                      pathColor: "#FF5630",
                      textColor: "#333",
                      trailColor: "#d1d5db",
                    })}
                  />
                </div>
              </div>

              {/* Engagement */}
              <div className="border bg-white rounded-3xl p-4 flex justify-between items-center w-64">
                <div>
                  <div className="text-gray-400 font-poppins mb-2">
                    Engagement
                  </div>
                  <div className="text-2xl font-poppins">100</div>
                  <div className="flex items-center mt-2">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12.3971"
                          cy="12.2278"
                          r="11.7564"
                          fill="#FEB558"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M17.5482 9.4264C17.4733 9.24288 17.3236 9.09174 17.1418 9.01617C17.0563 8.98378 16.96 8.96219 16.8638 8.96219H14.8748C14.4578 8.96219 14.1263 9.29685 14.1263 9.71788C14.1263 10.1389 14.4578 10.4736 14.8748 10.4736H15.0673L12.811 12.7515L11.7202 11.1105C11.5919 10.927 11.3994 10.7974 11.1749 10.7759C10.9396 10.7543 10.7364 10.8298 10.576 10.9918L7.38939 14.2089C7.10067 14.5003 7.10067 14.9754 7.38939 15.2776C7.5391 15.4288 7.72089 15.4935 7.91337 15.4935C8.10585 15.4935 8.29834 15.418 8.43735 15.2776L10.9824 12.7083L12.0731 14.3492C12.2014 14.5327 12.3939 14.6623 12.6185 14.6839C12.8537 14.7055 13.0569 14.6299 13.2173 14.468L16.1259 11.5315V11.7259C16.1259 12.1469 16.4574 12.4816 16.8745 12.4816C17.2915 12.4816 17.623 12.1469 17.623 11.7259V9.70709C17.6016 9.60993 17.5909 9.51277 17.5482 9.4264Z"
                          fill="#FFA600"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 ml-2">+14% Inc</div>
                  </div>
                </div>
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value="74"
                    text={`+74%`}
                    styles={buildStyles({
                      textSize: "24px",
                      pathColor: "#FFA600",
                      textColor: "#333",
                      trailColor: "#d1d5db",
                    })}
                  />
                </div>
              </div>

              {/* Audience Retention */}
              <div className="border bg-white rounded-3xl p-4 flex justify-between items-center w-64">
                <div>
                  <div className="text-gray-400 font-poppins mb-2">
                    Audience Retention
                  </div>
                  <div className="text-2xl font-poppins">330</div>
                  <div className="flex items-center mt-2">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        width="27"
                        height="25"
                        viewBox="0 0 27 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12.3971"
                          cy="12.3935"
                          r="11.7564"
                          fill="#29AB91"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M17.5482 9.59202C17.4733 9.40849 17.3236 9.25736 17.1418 9.18179C17.0563 9.1494 16.96 9.12781 16.8638 9.12781H14.8748C14.4578 9.12781 14.1263 9.46247 14.1263 9.8835C14.1263 10.3045 14.4578 10.6392 14.8748 10.6392H15.0673L12.811 12.9171L11.7202 11.2761C11.5919 11.0926 11.3994 10.9631 11.1749 10.9415C10.9396 10.9199 10.7364 10.9955 10.576 11.1574L7.38939 14.3745C7.10067 14.666 7.10067 15.141 7.38939 15.4432C7.5391 15.5944 7.72089 15.6592 7.91337 15.6592C8.10585 15.6592 8.29834 15.5836 8.43735 15.4432L10.9824 12.8739L12.0731 14.5148C12.2014 14.6984 12.3939 14.8279 12.6185 14.8495C12.8537 14.8711 13.0569 14.7955 13.2173 14.6336L16.1259 11.6972V11.8915C16.1259 12.3125 16.4574 12.6472 16.8745 12.6472C17.2915 12.6472 17.623 12.3125 17.623 11.8915V9.87271C17.6016 9.77555 17.5909 9.67838 17.5482 9.59202Z"
                          fill="#FFC700"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 ml-2">+14% Inc</div>
                  </div>
                </div>
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value="74"
                    text={`+74%`}
                    styles={buildStyles({
                      textSize: "24px",
                      pathColor: "#FFC700",
                      textColor: "#333",
                      trailColor: "#d1d5db",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
