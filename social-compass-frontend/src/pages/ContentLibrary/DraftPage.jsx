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

const DraftPage = () => {
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
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Inspiration > Drafts"} />
        </div>

        {/* Search bar */}
        <div className="flex items-center relative mb-5 ml-14">
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

        {/* rendering posts, reels and toptalks */}
        <div className="p-20 pl-40 pr-20 overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-full overflow-y-scroll scrollbar-thin">
          <div className="p-5 flex flex-wrap  gap-10">
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

          <div className="p-5 flex flex-wrap gap-5">
            <img src={reelImage} alt="Reel" className="w-[300px]" />
            <img src={reelImage} alt="Reel" className="w-[300px]" />
            <img src={reelImage} alt="Reel" className="w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftPage;
