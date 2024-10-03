import Heading from "../../components/Styles/Heading";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png"

const BusinessPortfolioInfo = () => (
    <div className="w-[800px] p-5 pl-10">
      <div className="my-3 ml-3">
      <Heading text={"Business Portfolio info"}/>
      </div>
      <div className="border border-gray-200 mb-10"></div>
      <div className="space-y-5">
        <div className="flex">
          <span className="w-48 text-gray-500 font-poppins ">Profile name</span>
          <span className="text-gray-500 font-poppins ">: Soundharya</span>
        </div>
        <div className="flex">
          <span className="w-48 text-gray-500 font-poppins ">Mail id</span>
          <span className="text-gray-500 font-poppins ">: nathan.roberts@example.com</span>
        </div>
        <div className="flex">
          <span className="w-48 text-gray-500 font-poppins ">Date of created</span>
          <span className="text-gray-500 font-poppins ">: May 12, 2019</span>
        </div>
        <div className="flex">
          <span className="w-48 text-gray-500 font-poppins ">Connected accounts</span>
          <span>
            <div className="flex">
            : <img src={facebook} alt="" className="h-5 w-5"/> <div className="font-poppins text-xs mt-1 ml-1 mr-2 text-gray-500">Facebook,</div> 
            <img src={instagram} alt="" className="h-5 w-5"/> <div className="font-poppins text-xs mt-1 ml-1 text-gray-500">Instagram</div>
            </div>
          </span>
        </div>
      </div>
    </div>
);

export default BusinessPortfolioInfo;