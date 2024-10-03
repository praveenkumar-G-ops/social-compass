import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useEffect } from "react";
import Heading from "../../components/Styles/Heading";
import searchIcon from "../../assets/images/navbar/search.png";
import postImage from "../../assets/images/contentLibrary/post.png";
import reelImage from "../../assets/images/contentLibrary/reel.png";
import TopTalksComp from "../../components/ContentLibrary/TopTalksComp";

const SavedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Content library"));
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {/* Heading */}
       <div className=" bg-gray-100 overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-full overflow-y-scroll scrollbar-thin">
        <div className=" flex flex-col sticky top-0 bg-gray-100  shadow-md z-10 ">
        <div className=" flex-1 mt-5 ml-14 mb-10">
          <Heading text={"Inspiration > Saved"} />
        </div>

        {/* Search bar */}
        <div className="flex-0 flex items-center relative mb-5 ml-14 ">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-3 h-5 w-5"
          />
          <input
            type="text"
            className="border border-gray-500 rounded-md  w-[600px] h-10 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
            placeholder="Search"
          />
        </div>
        </div>

        {/* rendering posts, reels and toptalks */}
        <div className="p-10 bg-white w-[90%] ml-14 ">
          <div className="font-poppins font-medium">Posts</div>
          <div className="p-5 flex flex-wrap gap-5">
            <img src={postImage} alt="Reel" className="w-[300px]" />
            <img src={postImage} alt="Reel" className="w-[300px]" />
            <img src={postImage} alt="Reel" className="w-[300px]" />
          </div>
          <div className="font-poppins font-medium mt-5">reels</div>
          <div className="p-5 flex flex-wrap gap-5">
            <img src={reelImage} alt="Reel" className="w-[300px]" />
            <img src={reelImage} alt="Reel" className="w-[300px]" />
            <img src={reelImage} alt="Reel" className="w-[300px]" />
          </div>
          <div className="font-poppins font-medium mt-5">Toptalks</div>
          <div className="p-5 flex flex-wrap gap-5">
            <TopTalksComp
              heading={"Marketing"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at."
              }
            />
            <TopTalksComp
              heading={"Marketing"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at."
              }
            />
            <TopTalksComp
              heading={"Marketing"}
              description={
                "Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at."
              }
            />
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default SavedPage;
