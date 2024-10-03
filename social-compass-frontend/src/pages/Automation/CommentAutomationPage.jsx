import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import profile from "../../assets/images/automation/commentAutomationPage/Profile.png";
import Advertise from "../../assets/images/automation/commentAutomationPage/advertise.png";
import postImage1 from "../../assets/images/automation/commentAutomationPage/Post1.png";
import postImage2 from "../../assets/images/automation/commentAutomationPage/Post2.png";
import postImage3 from "../../assets/images/automation/commentAutomationPage/Post3.png";
import postImage4 from "../../assets/images/automation/commentAutomationPage/Post4.png";
import postImage5 from "../../assets/images/automation/commentAutomationPage/Post5.png";
import postImage6 from "../../assets/images/automation/commentAutomationPage/Post6.png";
import postImage7 from "../../assets/images/automation/commentAutomationPage/Post7.png";
import postImage8 from "../../assets/images/automation/commentAutomationPage/Post8.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";

const CommentAutomationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Automation"));
  }, [dispatch]);

  const handleSelectAll = (e) => {
    const checkboxes = document.querySelectorAll(".post-checkbox");
    checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div>
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-gray-700 text-xl font-semibold font-poppins mb-6">
              Automation &gt; Comment automation
            </h1>
            <div className="flex -ml-7">
              <div className="bg-white shadow-md rounded-sm flex h-[700px]">
                <div className="w-[400px]">
                  <div className="bg-yellow-100 p-4">
                    <h2 className="text-gray-700 text-lg font-semibold font-poppins mb-2 text-start">
                      &lt; Post or Reel Comments
                    </h2>
                  </div>

                  <div className="relative p-4 rounded-lg mb-4 ">
                    <h3 className="text-gray-700 font-semibold font-poppins  mb-4">
                      Select Post or Reels
                    </h3>

                    <div className="grid grid-cols-4 gap-1 shadow-lg rounded-md p-4 border">
                      <div className="absolute z-10 top-7 right-8 mt-10 flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600 rounded-full"
                          onChange={handleSelectAll}
                        />
                        <label className="ml-2 text-sm font-poppins">
                          Select all
                        </label>
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage1}
                          alt="Post 1"
                          className="w-full rounded-lg h-15"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage2}
                          alt="Post 2"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage3}
                          alt="Post 3"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage4}
                          alt="Post 4"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage5}
                          alt="Post 5"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage6}
                          alt="Post 6"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage7}
                          alt="Post 7"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                      <div className="relative mt-4">
                        <img
                          src={postImage8}
                          alt="Post 8"
                          className="w-full rounded-lg"
                        />
                        <input
                          type="checkbox"
                          className="absolute top-2 right-2 form-checkbox h-4 w-4 text-blue-600 rounded-full post-checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold font-poppins mb-2 ml-5">
                      Apply automation for
                    </label>
                    <input
                      type="text"
                      placeholder="All Post or Reels"
                      className="w-[310px] ml-5 mr-5 p-2 rounded mb-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Next Post or Reel"
                      className="w-[310px] ml-5 mr-5  p-2 rounded text-sm"
                    />
                  </div>
                  <button
                    className="w-[290px] ml-8 mr-5 mt-[100px] font-poppins text-xs bg-[#242565] text-white py-2 rounded"
                    onClick={() => handleTabClick("addinputkeyword")}
                  >
                    Continue
                  </button>
                </div>
              </div>

              <div className="w-[285px] ml-[265px] mt-[90px]">
                <h2 className="text-lg font-semibold mb-4">Preview</h2>
                <div className="relative bg-white border h-[450px] border-gray-200 rounded-3xl  shadow-md">
                  <div className="flex items-center mb-4 p-3">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-medium">Ahmad Geidt</h3>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-center h-48 w-full rounded-lg mb-4"
                    style={{ backgroundImage: `url(${Advertise})` }}
                  ></div>
                  <div className="absolute  mt-2 border w-[285px] h-[240px] top-52 bg-[rgba(255,250,250,1)] rounded-3xl">
                    <div className="mt-4 text-gray-600 text-center font-poppins text-sm">
                      Comments
                    </div>
                    <div className="flex justify-center mt-14 ">
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                      <div className="h-6 w-6 bg-[rgba(217,217,217,1)] rounded-full mx-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentAutomationPage;
