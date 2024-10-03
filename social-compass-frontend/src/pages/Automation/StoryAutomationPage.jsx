import React, { useState } from "react";
import SidebarComp from "../../components/SidebarComp";
import Navbar from "../../components/Navbar";
import profile from "../../assets/images/automation/commentAutomationPage/Profile.png";


const StoryAutomationPage = () => {
  const [reply, setReply] = useState(
    "Hey, thanks for your comment!\n\nHere is the link you requested\nhttp://hcuqcd.com"
  );
  const [linkName, setLinkName] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [action, setAction] = useState("");
  const [showAddButtonForm, setShowAddButtonForm] = useState(false);
  const [showAddActionForm, setShowAddActionForm] = useState(false);

  const addButton = () => {
    if (linkName && linkURL) {
      setReply(reply + `\n[${linkName}](${linkURL})`);
      setLinkName("");
      setLinkURL("");
      setShowAddButtonForm(false); // Hide form after adding
    }
  };

  const addAction = () => {
    if (action) {
      setReply(reply + `\n${action}`);
      setAction("");
      setShowAddActionForm(false); // Hide form after adding
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-8 -ml-7">
          <h1 className="text-gray-700 text-xl font-semibold font-poppins mb-6 ml-10">
            Automation &gt; Story automation
          </h1>
          <div className="flex ">
            <div className="bg-white shadow-md rounded-sm flex flex-col h-[700px] w-[350px]">
              <div className="bg-yellow-100 p-4 mb-4">
                <h2 className="text-gray-700 font-semibold font-poppins mb-2 text-start">
                  &lt; Reply in DM
                </h2>
              </div>
              <div className="flex-1">
                <h3 className="text-[rgba(62,62,62,1)] font-semibold font-poppins mb-4  ml-5">
                  Story reply
                </h3>
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="w-[320px] h-40 ml-4 rounded-md text-poopins text-[rgba(132,132,132,1)] text-xs p-5 mb-4 
                  "
                  style={{
                    border: "1px solid rgba(221, 221, 221, 1)",
                    boxShadow: "0px 2px 4px 3px rgba(0, 0, 0, 0.03)",
                  }}
                />
                <button
                  className="absolute top-[378px] left-[258px] w-[319px] p-2 ml-[19px] rounded-md mb-4 text-sm text-gray-400"
                  onClick={() => {
                    setShowAddButtonForm(true);
                    setShowAddActionForm(false);
                  }}
                  style={{
                    border: "1px solid rgba(199,199,199,1)",
                    boxShadow: "0px 2px 4px 3px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  + Add button
                </button>
                <button
                  className="w-[320px] p-2  ml-4  rounded-md mb-4 text-sm text-gray-400"
                  onClick={() => {
                    setShowAddActionForm(true);
                    setShowAddButtonForm(false);
                  }}
                  style={{
                    border: "1px solid rgba(199,199,199,1)",
                    boxShadow: "0px 2px 4px 3px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  Add Action
                </button>
              </div>
              <button className="w-[290px] ml-8 mr-5 text-xs font-poppins mb-[30px] bg-[#242565] text-white rounded p-2">
                Save
              </button>
            </div>
            <div>
              {showAddButtonForm && (
                <div className="absolute left-[609px] top-[280px] z-12 bg-white p-4 h-[275px] w-[295px]">
                  <h3 className="text-gray-700 font-semibold font-poppins mb-4">
                    Add button
                  </h3>
                  <input
                    type="text"
                    placeholder="Link name"
                    value={linkName}
                    onChange={(e) => setLinkName(e.target.value)}
                    className="w-full p-2  mb-4 text-14px font-poppins font-[400px] rounded-[8px] text-[rgba(197,197,197,1)] placeholder-gray-400"
                    style={{ border: "1px solid rgba(239, 239, 239, 1)" }}
                  />
                  <input
                    type="text"
                    placeholder="Website URL"
                    value={linkURL}
                    onChange={(e) => setLinkURL(e.target.value)}
                    className="w-full h-[70px] p-2 rounded-[8px] text-[rgba(197,197,197,1)] text-start placeholder-gray-400"
                    style={{ border: "1px solid rgba(239, 239, 239, 1)" }}
                  />
                  <p className="font-poppins text-xs text-gray-400 p-1 mb-5">
                    Provide your valid website URL
                  </p>

                  <button
                    className="w-full p-2 bg-[#242565] text-white rounded font-poppins text-xs"
                    onClick={addButton}
                  >
                    Done
                  </button>
                </div>
              )}
              {showAddActionForm && (
                <div className="absolute left-[609px] top-[400px] z-12 bg-white p-4 shadow-lg border rounded-lg w-[295px]">
                  <h3 className="text-gray-700  font-semibold font-poppins mb-4">
                    Add Action
                  </h3>
                  <div className="relative">
                    <textarea
                      type="text"
                      placeholder="Did you receive ?"
                      value={action}
                      onChange={(e) => setAction(e.target.value)}
                      className="w-full h-28 p-2 border border-gray-200 rounded mb-4 placeholder-gray-400"
                    />
                    <button
                      className=" absolute top-[80px] right-[5px] w-full h-8 border border-none rounded-md mb-4 text-sm text-gray-400"
                      onClick={() => {
                        setShowAddButtonForm(true);
                        setShowAddActionForm(false);
                      }}
                    >
                      + Add button
                    </button>
                  </div>
                  <button
                    className="w-full p-2 bg-[#242565] text-xs font-poppins text-white rounded"
                    onClick={addAction}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1 ml-[300px] mt-[120px]">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <div className="relative bg-white border border-gray-200 rounded-3xl shadow-md p-4 w-[300px]">
                <div className="flex items-center mb-4">
                  <button className="mr-4 text-gray-600 text-xl">
                    <i className="fa fa-arrow-left">←</i>
                  </button>
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-poppins font-medium">
                      Ahmad Geidt
                    </h3>
                  </div>
                </div>
                <div className="pl-14">
                  <div className="p-4 text-xs bg-gray-100 rounded-lg mb-4">
                    {reply.split("\n").map((line, index) => (
                      <p key={index} className="mb-1">
                        {line}
                      </p>
                    ))}
                  </div>
                  <button className="w-full p-2 bg-white border border-gray-200 text-xs rounded-lg mb-4">
                    Link
                  </button>
                </div>
                <div className="flex items-center rounded-full bg-gray-200 p-2 mt-10">
                  <input
                    type="text"
                    placeholder="Aa"
                    className="flex-1 border-0 bg-gray-200 h-[10px]"
                  />
                  <button className="ml-2 text-gray-600">
                    <i className="fa fa-paper-plane">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0187 10.2213L1.76871 0.596317C1.61783 0.520863 1.44836 0.49063 1.2807 0.509259C1.11304 0.527887 0.954343 0.594584 0.82371 0.701316C0.698956 0.805873 0.60584 0.943155 0.554831 1.09773C0.503821 1.25231 0.496939 1.41804 0.53496 1.57632L2.85371 10.1251H12.75V11.8751H2.85371L0.49996 20.3976C0.464283 20.5297 0.460118 20.6684 0.487801 20.8025C0.515484 20.9366 0.574241 21.0623 0.659349 21.1695C0.744457 21.2768 0.853539 21.3625 0.977827 21.4199C1.10211 21.4774 1.23814 21.5048 1.37496 21.5001C1.51193 21.4992 1.6468 21.4663 1.76871 21.4038L21.0187 11.7788C21.162 11.7054 21.2823 11.5938 21.3663 11.4564C21.4503 11.319 21.4947 11.1611 21.4947 11.0001C21.4947 10.839 21.4503 10.6811 21.3663 10.5437C21.2823 10.4063 21.162 10.2947 21.0187 10.2213Z"
                          fill="black"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAutomationPage;
