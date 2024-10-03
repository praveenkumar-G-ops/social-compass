import React, { useEffect, useState } from "react";
import AdsReportComp from "../../components/AdsAndCampaign/AdsReportComp";
import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const AdReportPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const customers = [
    {
      name: "Jane Cooper",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 29000.0,
    },
    {
      name: "Floyd Miles",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 10800.0,
    },
    {
      name: "Ronald Richards",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 30000.0,
    },
    {
      name: "Marvin McKinney",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 28125.0,
    },
    {
      name: "Jerome Bell",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 19500.0,
    },
    {
      name: "Kathryn Murphy",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 12000.0,
    },
    {
      name: "Jacob Jones",
      impressions: 357,
      clicks: 883,
      avgCPC: 274,
      spent: 5400.0,
    },
    

  ];

  const reports = [
    { title: "Clicks", number: "5,423", status: "increasing", percentage: 16 },
    { title: "Impression", number: "1,893", status: "decreasing", percentage: 1 },
    { title: "CTR", number: "9,893", status: "decreasing", percentage: 1 },
    { title: "Avg. CPC", number: "7,893", status: "increasing", percentage: 16 },
    { title: "Spent", number: "5,893", status: "increasing", percentage: 16 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Main Content */}
        <div className="mt-5 ml-14 mb-10 shadow-md h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-200">
          {/* Sticky Heading and Reports */}
          <div className="sticky top-0 bg-gray-100 z-10 pt-5">
            <Heading text={"Ads report"} />
            <div className="w-[90%] mt-5 mx-auto">
              <div className="flex gap-20">
                {reports.map((report, index) => (
                  <AdsReportComp key={index} {...report} />
                ))}
              </div>
            </div>
            <div className="flex justify-between px-8 items-center  py-8 ">
              <Heading text={"All Customers"} />
              <div className="flex items-center">
                <span className="mr-2">Sort by:</span>
                <select className="border rounded">
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Customers Table */}
          <div className="bg-white p-6 pl-14 rounded-lg ">
            

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-5">Campaign name</th>
                  <th className="pb-5">Impressions</th>
                  <th className="pb-5">Clicks</th>
                  <th className="pb-5">Avg. CPC</th>
                  <th className="pb-5">Spent</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-5">{customer.name}</td>
                    <td className="py-5">{customer.impressions}</td>
                    <td className="py-5">{customer.clicks}</td>
                    <td className="py-5">{customer.avgCPC}</td>
                    <td className="py-5">${customer.spent.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdReportPage;
