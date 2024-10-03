import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SidebarComp from "../../components/SidebarComp";
import Navbar from "../../components/Navbar";
import Profile from "../../assets/images/engagement/Profile.png";
import Heading from "../../components/Styles/Heading";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const Checkbox = ({ checked, onChange, label }) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="hidden"
    />
    <span
      className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
        checked ? "border-blue-500" : "border-gray-300"
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </span>
    <span className="text-[rgba(128,128,128,1)] font-poppins text-[14px]">
      {label}
    </span>
  </label>
);

const CreateResponse = () => {
  const [facebookChecked, setFacebookChecked] = useState(true);
  const [instagramChecked, setInstagramChecked] = useState(false);
  const [message, setMessage] = useState("");
  const maxLength = 500;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Engagement"));
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <div className="flex items-center space-x-2 text-gray-600 ml-8 mt-8 font-poppins text-[20px] font-semibold">
            <Heading text="Inbox > Automated responses" />
          </div>

          <div className="flex">
            <div className="flex bg-white w-[650px] ml-8 h-[550px] mt-8 rounded-lg">
              <div className="flex flex-col mt-10 ml-10">
                <h2 className="font-poppins text-[rgba(72,72,72,1)] text-[18px] font-semibold">
                  Channel
                </h2>
                <p className="font-poppins text-[rgba(128,128,128,1)] text-[14px]">
                  Where would you like to use this automation?
                </p>

                <div className="space-y-2 mt-7">
                  <Checkbox
                    checked={facebookChecked}
                    onChange={() => setFacebookChecked(!facebookChecked)}
                    label="Facebook"
                  />
                  <Checkbox
                    checked={instagramChecked}
                    onChange={() => setInstagramChecked(!instagramChecked)}
                    label="Instagram"
                  />
                </div>

                <div className="w-[560px] mt-8">
                  <label className="block text-[rgba(72,72,72,1)] text-[18px] font-semibold mb-2">
                    Message
                  </label>
                  <div className="relative text-gray-400 text-xxs">
                    <div className="absolute top-4 right-1">
                      <span className="mr-2">{`${message.length}/${maxLength}`}</span>
                    </div>
                    <textarea
                      className="w-full h-[180px] text-md p-6 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                      rows="4"
                      placeholder="Hi, thanks for contacting us. We’ve received your message and appreciate you reaching out"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={maxLength}
                      style={{ border: "2.23px solid rgba(215, 215, 215, 1)" }}
                    />
                    <div className="absolute bottom-3 right-3 h-6 flex items-center">
                      <FontAwesomeIcon icon={faSmile} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen bg-gray-100 flex flex-col ml-8">
              <h1 className="font-poppins text-[rgba(33,37,41,1)] font-semibold text-[20px]">
                Preview
              </h1>
              <div className="w-[290px] h-[420px] mx-auto mt-20 p-2 bg-white rounded-[30px]">
                <div className="flex items-center mb-2 ml-4">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="text-gray-500 mr-2"
                  />
                  <img
                    src={Profile}
                    alt="Ahmad Geidt"
                    className="w-10 h-10 rounded-[10px] mr-2"
                  />
                  <span className="font-bold text-lg">Ahmad Geidt</span>
                </div>
                <div className="p-4 rounded-lg mb-4">
                  <div className="flex items-start flex-col">
                    <p className="p-3 rounded-[18px] text-gray-700 bg-gray-200">
                      {message
                        ? message
                        : "Hi, thanks for contacting us. We've received your message and appreciate you reaching out"}
                    </p>
                    <img
                      src={Profile}
                      alt="Ahmad Geidt"
                      className="w-8 h-8 rounded-full -ml-4 mr-2"
                    />
                  </div>
                </div>
                <div className="flex items-center rounded-full bg-gray-200 p-2 mt-32">
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

export default CreateResponse;
