import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import williams from "../../assets/images/competitorAnalysis/williams.png";
import profile from "../../assets/images/navbar/profile.png";
import popularReel1 from "../../assets/images/competitorAnalysis/popularReel1.png";
import popularReel2 from "../../assets/images/competitorAnalysis/popularReel2.png";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PopularReelsComp from "../../components/CompetitorAnalysis/PopularReelsComp";

const CompetitorAnalysisResultsPage = () => {
  const [duration, setDuration] = useState("overall");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Competitor Analysis"));
  }, [dispatch]);

  const durationOpts = [
    "overall",
    "Last 90 days",
    "Last 60 days",
    "Last 30 days",
  ];

  const data = [
    { name: "0", myCompany: 32, otherCompany: 90 },
    { name: "1", myCompany: 69, otherCompany: 97 },
    { name: "2", myCompany: 24, otherCompany: 8 },
    { name: "3", myCompany: 61, otherCompany: 11 },
  ];

  const audienceEngagementData = [
    { name: "0", myCompany: 90, otherCompany: 40 },
    { name: "1", myCompany: 70, otherCompany: 60 },
    { name: "2", myCompany: 20, otherCompany: 80 },
    { name: "3", myCompany: 10, otherCompany: 50 },
  ];

  const avgReturnFollowersData = [
    { name: "Jan", myCompany: 10, otherCompany: 5 },
    { name: "Feb", myCompany: 30, otherCompany: 20 },
    { name: "Mar", myCompany: 50, otherCompany: 40 },
    { name: "Apr", myCompany: 20, otherCompany: 15 },
    { name: "May", myCompany: 40, otherCompany: 30 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* header */}

        <div className="flex justify-between mt-4 ml-10 mr-20">
          {/* Heading */}
          <Heading text={"Competitor analysis"} />

          {/* profile vs profile */}
          <div className="flex justify-between gap-10">
            <div className="flex items-center relative">
              <img
                src={profile}
                className="absolute left-5 h-7 w-7 rounded-full"
              />
              <select className="border h-full w-[250px] border-gray-300 rounded-3xl p-2 pl-20 pr-4 font-poppins text-sm">
                <option>Soundharya</option>
              </select>
            </div>
            <div className="mt-2">VS</div>
            <div className="flex items-center relative">
              <img
                src={williams}
                className="absolute left-5 h-7 w-7 rounded-full"
              />
              <select className="border h-full w-[250px] border-gray-300 rounded-3xl p-2 pl-20 pr-4 font-poppins text-sm">
                <option>William_Mans</option>
              </select>
            </div>
          </div>

          {/* duration dropdown */}
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

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 scrollbar-thumb-rounded-full  scrollbar-track-rounded-100% scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          {/* followers graph */}
          <div className="bg-white h-[60%] w-[90%] p-5 mt-10 ml-14 ">
            <div className="flex justify-between">
              <Heading text={"Followers"} />
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#EAB308] mt-1"></div>
                  <div className="text-gray-500">other company</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#5687F2] mt-1"></div>
                  <div className="text-gray-500">My company</div>
                </div>
              </div>
            </div>
            {/* graph */}
            <div className="h-[80%] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="myCompany"
                    stroke="#5687F2"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="otherCompany"
                    stroke="#EAB308"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* other company popular reels */}
          <div className="bg-white h-[60%] w-[90%] p-5 mt-10 ml-14">
            <Heading text={"Other company popular reels"} />
            <div className="flex flex-wrap gap-4 p-10">
              <PopularReelsComp
                image={popularReel1}
                date="Sun oct 9,4:53"
                description="Lorem ipsum dolor....."
                social="Instagram"
                reach={90}
              />
              <PopularReelsComp
                image={popularReel2}
                date="Sun oct 9,4:53"
                description="Lorem ipsum dolor....."
                social="Facebook"
                reach={90}
              />
              <PopularReelsComp
                image={popularReel1}
                date="Sun oct 9,4:53"
                description="Lorem ipsum dolor....."
                social="Instagram"
                reach={90}
              />
              <PopularReelsComp
                image={popularReel1}
                date="Sun oct 9,4:53"
                description="Lorem ipsum dolor....."
                social="Facebook"
                reach={90}
              />
            </div>
          </div>

          {/* audience engagement graph */}
          <div className="bg-white h-[70%] w-[90%] p-5 mt-10 ml-14">
            <Heading text={"Audience engagement"} />
            <div className="flex gap-[400px] ml-5 mt-10">
              <div>
                <p className="text-gray-500">My company followers</p>
                <p className="text-3xl">450</p>
              </div>
              <div>
                <p className="text-gray-500">Other company followers</p>
                <p className="text-3xl">230</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[48%]">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={audienceEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="myCompany" fill="#5687F2" />
                    <Bar dataKey="otherCompany" fill="#EAB308" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="w-[48%]">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={audienceEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="myCompany" fill="#5687F2" />
                    <Bar dataKey="otherCompany" fill="#EAB308" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* avg return followers graph */}
          <div className="bg-white h-[50%] w-[90%] p-5 mt-10 ml-14">
            <Heading text={"Avg. Return followers"} />
            <div className="flex mt-4">
              <div className="ml-5">
                <p className="text-gray-500">Audience</p>
                <p className="text-3xl">
                  5 <span className="text-green-500 text-sm">↑10%</span>
                </p>
              </div>
              <div className="ml-[300px]">
                <p className="text-gray-500">Post attention</p>
                <p className="text-3xl">
                  60 <span className="text-gray-500 text-sm">0%</span>
                </p>
              </div>
              <div className="ml-[250px]">
                <p className="text-gray-500">Engage rating by followers</p>
                <p className="text-3xl">
                  20 <span className="text-gray-500 text-sm">0%</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[32%]">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={avgReturnFollowersData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="myCompany"
                      stroke="#5687F2"
                    />
                    <Line
                      type="monotone"
                      dataKey="otherCompany"
                      stroke="#EAB308"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-[32%]">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={avgReturnFollowersData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="myCompany"
                      stroke="#5687F2"
                    />
                    <Line
                      type="monotone"
                      dataKey="otherCompany"
                      stroke="#EAB308"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-[32%]">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={avgReturnFollowersData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="myCompany"
                      stroke="#5687F2"
                    />
                    <Line
                      type="monotone"
                      dataKey="otherCompany"
                      stroke="#EAB308"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalysisResultsPage;
