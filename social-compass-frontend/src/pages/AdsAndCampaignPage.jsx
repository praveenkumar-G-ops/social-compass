import React from "react";
import Navbar from "../components/Navbar";
import message from "../assets/images/adsAndCampaign/message-1.png";
import product from "../assets/images/adsAndCampaign/product-1.png";
import bulb from "../assets/images/adsAndCampaign/bulb.png";
import Heading from "../components/Styles/Heading";
import Button from "../components/Styles/Button";

const AdsAndCampaignPage = () => {
  return (
    <div className="flex h-screen bg-[#F5F6FA]">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
        <Heading text={"Ads and Campaign"}/>
        </div>

        <div className="flex-1 flex flex-col p-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col justify-center items-center h-[500px]">

              {/* Boxes */}
              <div className="flex flex-row gap-6 justify-center items-center ">

                {/* Message enquiry */}
                <div className="bg-white rounded-lg p-8 w-80 shadow-sm flex flex-col items-center">
                  <div className="bg-[#E0F7EF] rounded-lg p-4 mb-4 w-20 h-16 flex items-center justify-center">
                    <img
                      src={message}
                      alt="Message Enquiries"
                      className="w-10 h-10"
                    />
                  </div>
                  <h2 className="font-poppins text-lg text-gray-800 mb-1 text-center">
                    Message Enquiries
                  </h2>
                  <p className="font-poppins text-sm text-gray-500 text-center">
                    Get more customers
                  </p>
                </div>

                {/* Product enquiry */}
                <div className="bg-white rounded-lg p-8 w-80 shadow-sm flex flex-col items-center">
                  <div className="bg-[#FFF4E1] rounded-lg p-4 mb-4 w-20 h-16 flex items-center justify-center">
                    <img
                      src={product}
                      alt="Product Sales"
                      className="w-10 h-10"
                    />
                  </div>
                  <h2 className="font-poppins text-lg text-gray-800 mb-1 text-center">
                    Product Sales
                  </h2>
                  <p className="font-poppins text-sm text-gray-500 text-center">
                    Get more sales on your website
                  </p>
                </div>
              </div>

              {/* Highlighted Text */}
              <div className="bg-[#FFF4E1] border-r-4 border-orange-400 flex items-center p-2 mb-8 mt-20 w-[700px]">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <img src={bulb} alt="Bulb" className="w-5 h-5" />
                </div>
                <p className="font-poppins text-sm text-gray-500">
                  Create campaign to get message from customers
                </p>
              </div>
            </div>

            {/* Next step button */}
            <div className="flex justify-end">
              <Button text={"Next Step"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsAndCampaignPage;
