import React from "react";
import Heading from "../Styles/Heading";
import Description from "../Styles/Description";
import Button from "../Styles/Button";

const ContentLibraryComp = ({ title, description, onClick }) => {
  return (
    <div className="flex gap-16 w-full bg-white p-6 rounded-lg shadow">
      <div className="bg-gray-300 w-1/2"></div>
      <div className="flex flex-col gap-5 my-5">
        <Heading text={title} />
        <Description text={description} />
        <Button text={"Get started"} onClick={onClick}/>
      </div>
    </div>
  );
};

export default ContentLibraryComp;
