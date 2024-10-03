import Navbar from "../../components/Navbar";
import NoAnalysisFound from "../../assets/images/analyticsAndReports/noAnalysisFound.png";
import Heading from "../../components/Styles/Heading";
import Description from "../../components/Styles/Description";
import Button from "../../components/Styles/Button";
import SubHeading from "../../components/Styles/SubHeading";
import analysis from "../../assets/images/analyticsAndReports/analysis.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SidebarComp from "../../components/SidebarComp";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const AnalyticsAndReportTruePage = () => {
  const [analytics, setAnalytics] = useState(false);
  const [duration, setDuration] = useState("overall");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Analytics and Reports"));
  }, [dispatch]);

  const durationOpts = [
    "overall",
    "Last 90 days",
    "Last 60 days",
    "Last 30 days",
  ];

  const facebookData = {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [10, 30, 20, 50, 30, 40, 80, 100, 60],
        borderColor: "black",
        tension: 0.1,
      },
    ],
  };

  const instagramData = {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 15, 10, 25, 15, 20, 40, 50, 30],
        borderColor: "black",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        {/* <div className="mt-5 ml-12 mb-10">
          <Heading text={"Analytics and Reports"} />
        </div> */}

        {/* No data available */}
        {/* <div className="flex flex-col gap-2 h-full justify-center items-center">
          <img src={NoAnalysisFound} />
          <SubHeading text={"No analysis and reports available"} />
          <Description
            text={
              "Set a goal, track progress and learn helpful tips for your professional success"
            }
          />
        </div> */}

        {/* Heading and right dropdown */}
        <div className="flex justify-between mt-5 ml-12 mb-10 mr-20">
          <Heading text={"Analytics and Reports"} />

          <select
            className="border bg-gray-100 rounded-md font-poppins text-gray-400 text-xs"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            value={duration}
          >
            {durationOpts.map((dur) => (
              <option key={dur} value={dur}>
                {dur}
              </option>
            ))}
          </select>
        </div>

        {/* Set goals comp */}
        <div className="flex gap-20 bg-white w-[90%] h-1/4 ml-14 px-10 py-5">
          {/* image */}
          <div className="w-1/2 ">
            <img src={analysis} alt="" className="h-[160px] w-[500px]" />
          </div>
          {/* right side text, description and button */}
          <div className="w-1/2">
            <div className="font-poppins font-semibold text-2xl mt-5 ">
              Set Goals
            </div>
            <Description
              text={
                "Set a goal,track progress and learn helpful tips for your professional success "
              }
            />
            <div className="mt-8">
              <Button text={"Get started"} />
            </div>
          </div>
        </div>

        {/* Post reach  */}
        <div className="bg-white w-[90%] h-1/2 ml-14 p-10 mt-10 mb-5">
          <div className="flex justify-between">
            <Heading text={"Post Reach"} />

            <select className="border bg-gray-100 rounded-md font-poppins text-gray-400 text-xs">
              <option>Export</option>
            </select>
          </div>

          <div className="flex mt-10">
            <div className="w-1/2 pr-4">
              <div className="text-gray-600">Facebook page reach</div>
              <span className="font-poppins text-3xl">450 </span>
              <span className="text-green-500"> ↑ 20%</span>
              <div className="h-40">
                <Line data={facebookData} options={options} />
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="text-gray-600">Instagram page reach</div>
              <span className="font-poppins text-3xl">80 </span>
              <span className="text-green-500"> ↑ 1.2%</span>
              <div className="h-40">
                <Line data={instagramData} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAndReportTruePage;
