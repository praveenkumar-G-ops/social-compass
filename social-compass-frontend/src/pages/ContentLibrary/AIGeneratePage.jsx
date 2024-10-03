import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import Heading from "../../components/Styles/Heading";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import upload from "../../assets/images/adsAndCampaign/upload.png";
import Button from "../../components/Styles/Button";
import { useEffect } from "react";
import AIGenerateComp from "../../components/ContentLibrary/AIGenerateComp";
import marketing from "../../assets/images/contentLibrary/marketing.png"
import sales from "../../assets/images/contentLibrary/sales.png"

const AIGeneratePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Content library"));
  }, [dispatch]);

  const keywords = [
    "Apple watches",
    "Classic watches",
    "Office watches",
    "Formal watches",
    "Analog watches",
    "Men watches",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-10">
          <Heading text={"Inspiration > AI generate"} />
        </div>

        <div className="flex h-full ">
          <div className="bg-white w-1/2 h-[80%] mt-10 ml-10 rounded-sm shadow-md">
            {/* prompt field */}
            <div className="font-poppins font-semibold mt-5 ml-5">Prompt</div>
            <textarea
              placeholder="Marketing Analysis right now"
              className="border border-gray-300 rounded-md my-5 mx-7 p-2 w-[90%] h-32 placeholder-gray-400"
            ></textarea>

            {/* Keywords */}
            <div className="font-poppins font-semibold mt-5 ml-5">Keyword</div>
            <div className="flex flex-wrap gap-2 mt-10 ml-10 mb-10">
              {keywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleInterestClick(keyword)}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"
                >
                  {keyword} +
                </button>
              ))}
            </div>

            {/* Media */}
            <div className="font-poppins font-semibold mt-5 ml-5">Media</div>
            <div className="font-poppins text-xs text-gray-400 ml-5">
              Share photos and videos on instagram. Post can't exceed 10 photos
              or videos.
            </div>
            <div className="flex justify-between mr-10 mt-5">
            <div className="ml-5 mt-5">
              <div className="relative">
                <img
                  src={upload}
                  alt=""
                  className="absolute h-[30px] w-[30px] top-1 left-2"
                />
                <select className="appearance-none bg-white border text-xs border-gray-300 rounded-md p-2 pl-10 w-[200px] text-gray-700">
                  <option>Add photo/video</option>
                </select>
               
              </div>
            
            </div>
                 <Button text={"Generate"}/>
              
            
            </div>

            {/* Generate button */}
           
          </div>

          
          {/* Right side results div */}
          <div className="bg-white h-[80%] w-[40%] mt-10 ml-10 rounded-sm shadow-md overflow-x-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          <div className="font-poppins font-semibold mt-5 ml-5">Results</div>
          <div className="flex justify-start gap-2 mt-5 ml-5">
            <AIGenerateComp 
            image={marketing}
            heading={"Marketing"} 
            description={"Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at. Laoreet viverra nunc massa mauris facilisis consequat massa sed viverra. Felis ultrices volutpat pulvinar at urna eget."}
            />
            <AIGenerateComp 
            image={sales}
            heading={"Sales"} 
            description={"Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at. Laoreet viverra nunc massa mauris facilisis consequat massa sed viverra. Felis ultrices volutpat pulvinar at urna eget."}
            />
            <AIGenerateComp 
            image={marketing}
            heading={"Marketing"} 
            description={"Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at. Laoreet viverra nunc massa mauris facilisis consequat massa sed viverra. Felis ultrices volutpat pulvinar at urna eget."}
            />
            <AIGenerateComp 
            image={sales}
            heading={"Sales"} 
            description={"Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at. Laoreet viverra nunc massa mauris facilisis consequat massa sed viverra. Felis ultrices volutpat pulvinar at urna eget."}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGeneratePage;
