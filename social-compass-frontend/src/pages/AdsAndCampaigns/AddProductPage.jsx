import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import Button from "../../components/Styles/Button";
import addProduct from "../../assets/images/adsAndCampaign/addProduct.png";
import upload from "../../assets/images/adsAndCampaign/upload.png";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("ADs and Campaign"));
  }, [dispatch]);

  const navigate = useNavigate();

  const currency = ["₹", "$", "€", "£"];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-[70px] mb-6">
          <Heading text={"Ads and Campaign"} />
        </div>

        {/* status bar */}
        <div className="flex  mt-4 ml-[70px]">
          <img src={addProduct} alt="" className="h-[50px]" />
        </div>

        {/* Textfields */}
        <div className="bg-white w-[90%] mt-10 mx-auto p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 gap-6">

            {/* product name */}
            <div className="mr-10">
              <input
                type="text"
                placeholder="Product name"
                className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400"
              />
              <span className="text-xs text-gray-400">
                Enter your Product name
              </span>
            </div>

            {/* currency and prize */}
            <div className="flex">
              <div className="relative inline-block mr-10">
                <select
                  value={currency}
                  className="appearance-none bg-transparent border border-gray-300 rounded-md p-2 pr-8"
                >
                  {currency.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mr-10">
              <input
                type="text"
                placeholder="Product Prize"
                className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400"
              />
              <span className="text-xs text-gray-400">
                Enter a valid prize for your product
              </span>
            </div>
            </div>
          </div>


          {/* description */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="mr-10">
              <textarea
                placeholder="Product Description"
                className="border border-gray-300 rounded-md p-2 w-full h-32 placeholder-gray-400"
              ></textarea>
              <span className="text-xs text-gray-400">
                Enter a catchy description for your product
              </span>
            </div>

            {/* image upload */}
            <div className="ml-24 mr-10">
              <div className="border border-gray-300 rounded-md p-4">
                <p className="text-gray-400 mb-2">
                  Upload images from your device
                </p>
                <div className="relative">
                  <img src={upload} alt="" className="absolute h-[30px] w-[30px] top-1 left-2"/>
                  <select className="appearance-none bg-white border text-xs border-gray-300 rounded-md p-2 pl-10 w-[200px] text-gray-700">
                    <option>Add Image</option>
                  </select>
                </div>
              </div>
              <span className="text-xs text-gray-400">Upload image</span>
            </div>
          </div>

          {/* next button */}
          <div className="flex justify-end mt-6">
            <Button text="Next Step" onClick={()=>navigate("/ad-preview")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
