import React, { useState } from "react";
import Navbar from "../components/Navbar";
import searchIcon from "../assets/images/navbar/search.png";
import ContentLibraryComp from "../components/ContentLibrary/ContentLibraryComp";
import Heading from "../components/Styles/Heading";
import { useNavigate } from "react-router-dom";

const ContentLibraryPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");

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

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Content Library"} />
        </div>

        <div className="px-16">

          {/* Search bar */}
          <div className="flex items-center relative mb-5">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute left-3 h-5 w-5"
            />
            <input
              type="text"
              className="border rounded-md w-[600px] h-10 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
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

          {/* Components */}
          <div className="flex flex-col gap-4 mt-5">
            <ContentLibraryComp
              title={"AI Generator"}
              description={
                "Set a goal, track progress and learn helpful tips for your professional success"
              }
              onClick={()=>{navigate("/ai-generate")}}
            />
            <ContentLibraryComp
              title={"Trending"}
              description={
                "Set a goal, track progress and learn helpful tips for your professional success"
              }
              onClick={()=>{navigate("/trending")}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLibraryPage;
