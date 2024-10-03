import React from "react";

const ToggleButton = ({ label, color, checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`block w-7 h-4 rounded-full ${
            checked ? color : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-0.5 top-[1.5px] bg-white w-3 h-3 rounded-full transition ${
            checked ? "transform translate-x-full" : ""
          }`}
        ></div>
      </div>
      <div className="ml-1 text-gray-600 text-sm font-poppins">{label}</div>
    </label>
  );
};

const ToggleButtonGroup = () => {
  const [applications, setApplications] = React.useState(true);
  const [shortlisted, setShortlisted] = React.useState(true);
  const [rejected, setRejected] = React.useState(true);

  return (
    <div className="flex space-x-4">
      <ToggleButton
        label="Applications"
        color="bg-blue-400"
        checked={applications}
        onChange={() => setApplications(!applications)}
      />
      <ToggleButton
        label="Shortlisted"
        color="bg-yellow-400"
        checked={shortlisted}
        onChange={() => setShortlisted(!shortlisted)}
      />
      <ToggleButton
        label="Rejected"
        color="bg-red-400"
        checked={rejected}
        onChange={() => setRejected(!rejected)}
      />
    </div>
  );
};

const TotalRevenue = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Sample data - replace with actual data
  const data = [
    { applications: 55, shortlisted: 25, rejected: 20 },
    { applications: 40, shortlisted: 30, rejected: 30 },
    { applications: 15, shortlisted: 40, rejected: 10 },
    { applications: 15, shortlisted: 40, rejected: 15 },
    { applications: 45, shortlisted: 25, rejected: 20 },
    { applications: 25, shortlisted: 35, rejected: 15 },
    { applications: 40, shortlisted: 30, rejected: 25 },
    { applications: 55, shortlisted: 25, rejected: 15 },
    { applications: 40, shortlisted: 25, rejected: 25 },
    { applications: 15, shortlisted: 25, rejected: 20 },
    { applications: 40, shortlisted: 55, rejected: 10 },
    { applications: 15, shortlisted: 40, rejected: 15 },
  ];

  return (
    <div className="bg-white p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-poppins text-xl text-[#242565]">Total Revenue</h2>
        <div className="flex items-center space-x-4">
          <ToggleButtonGroup />
          <select className="border rounded text-xs font-poppins border-gray-300">
            <option>Month</option>
          </select>
        </div>
      </div>
      <div className="relative h-64 mt-20">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>100%</span>
          <span>80%</span>
          <span>60%</span>
          <span>40%</span>
          <span>20%</span>
          <span>0%</span>
        </div>
        <div className="ml-8 h-full flex">
          {months.map((month, index) => (
            <div
              key={month}
              className="flex-1 flex flex-col justify-end items-center"
            >
              <div
                className="w-1.5 bg-red-400 rounded-lg mb-2"
                style={{ height: `${data[index].rejected}%` }}
              ></div>
              <div
                className="w-1.5 bg-yellow-400 rounded-lg mb-2"
                style={{ height: `${data[index].shortlisted}%` }}
              ></div>
              <div
                className="w-1.5 bg-blue-400 rounded-lg mb-2"
                style={{ height: `${data[index].applications}%` }}
              ></div>

              <span className="text-xs text-gray-500 mt-1">{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
