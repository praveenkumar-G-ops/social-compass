import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import commentIntoSalesImage from "../assets/images/automation/commentIntoSalesImage.png";
import storyIntoLeadImage from "../assets/images/automation/storyIntoLeadImage.png";
import buildEmailListImage from "../assets/images/automation/buildEmailListImage.png";

import { setSidebarItem } from "../../src/redux/sidebar/sidebarSlice";

const AutomationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Automation"));
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div>
          <div className="min-h-screen bg-gray-100 p-8 mt-5  ">
            {/* <h1 className="text-2xl font-bold">Automation</h1> */}
            <div className=" p-8  mt-12 h-[550px] ">
              <h2 className="text-lg text-center font-semibold mb-2 ml-3 mt-0">
                Choose the Automation flow
              </h2>
              <div className="flex justify-center space-x-8 mt-8">
                <div
                  className="w-[330px] p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => handleButtonClick("/comment-automation")}
                >
                  <img
                    src={commentIntoSalesImage}
                    alt="Comment into sales"
                    className="w-[183px] h-[180px] mt-3 mb-8 object-center"
                  />
                  <p className="text-gray-500 text-xl font-poopins font-semibold">
                    Comment into sales
                  </p>
                </div>
                <div
                  className="w-[330px] p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => handleButtonClick("/story-automation")}
                >
                  <img
                    src={storyIntoLeadImage}
                    alt="Story into lead"
                    className="w-[183px] h-[180px] mt-3 mb-8 object-center"
                  />
                  <p className="text-gray-500 text-xl font-poopins font-semibold">
                    Story into lead
                  </p>
                </div>
                <div
                  className="w-[330px] p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  onClick={() => handleButtonClick("/email-automation")}
                >
                  <img
                    src={buildEmailListImage}
                    alt="Build a email list"
                    className="w-[183px] h-[180px] mt-3 mb-8 object-center"
                  />
                  <p className="text-gray-500 text-xl font-poopins font-semibold">
                    Build a email list
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
