import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";
import { useState, useEffect } from "react";
import Heading from "../../components/Styles/Heading";
import searchIcon from "../../assets/images/navbar/search.png";
import postImage from "../../assets/images/contentLibrary/post.png";
import reelImage from "../../assets/images/contentLibrary/reel.png";
import TopTalksComp from "../../components/ContentLibrary/TopTalksComp";

const TrendingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Content library"));
  }, [dispatch]);

  const [selectedTag, setSelectedTag] = useState("All");
  const [activeTab, setActiveTab] = useState("Posts");

  const tags = [
    "All",
    "Personal Branding",
    "Copywriting",
    "Saas Producer",
    "Leadership",
    "Productivity",
    "Personal Branding",
    "Copywriting",
    "Saas Producer",
    "Leadership",
    "Productivity",
    "Personal Branding",
    "Copywriting",
    "Saas Producer",
    "Leadership",
    "Productivity",
    "Personal Branding",
    "Copywriting",
    "Saas Producer",
    "Leadership",
    "Productivity",
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarComp />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Inspiration > Trending"} />
        </div>

        <div className="ml-14 flex-1 overflow-y-auto scrollbar-thumb-rounded-full  scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 h-32 overflow-y-scroll scrollbar-thin">
          {/* Search bar */}
          <div className="flex items-center relative mb-5">
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

          {/* tags */}
          <div className="flex flex-wrap w-[1050px] gap-2 mb-5 self-start">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full text-xs ${
                  selectedTag === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-blue-700 border-2 border-blue-500"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* toggle buttons */}
          <div>
          
          <div className="flex space-x-4 mb-4 sticky top-0 bg-gray-100 z-10">
            <button
              className={`px-4 py-2 ${
                activeTab === "Posts" ? "border-b-4 border-[#242565]" : ""
              }`}
              onClick={() => setActiveTab("Posts")}
            >
              Posts
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "Reels" ? "border-b-4 border-[#242565]" : ""
              }`}
              onClick={() => setActiveTab("Reels")}
            >
              Reels
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "Toptalks" ? "border-b-4 border-[#242565]" : ""
              }`}
              onClick={() => setActiveTab("Toptalks")}
            >
              Toptalks
            </button>


          
          </div>

          <div className="bg-white w-[90%] h-full p-4 overflow-y-auto ">
            {activeTab === "Posts" && (
              <div className="p-5 flex flex-wrap gap-12">
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
                <img src={postImage} alt="Post" className="w-[300px]" />
              </div>
            )}
            {activeTab === "Reels" && (
              <div className="p-5 flex flex-wrap gap-12">
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
                <img src={reelImage} alt="Reel" className="w-[300px]" />
              </div>
            )}
            {activeTab === "Toptalks" && (
              <div className="p-5 flex flex-wrap gap-12">
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
                <TopTalksComp
                  heading={"Marketing"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur. Id et dolor viverra faucibus vel lorem. Aliquet eros vulputate ac quam enim at."
                  }
                />
              </div>
            )}
          </div>
          </div>

          {/* rendering posts, reels and toptalks */}
         
        </div>
      </div>
      </div>
    
  );
};

export default TrendingPage;


