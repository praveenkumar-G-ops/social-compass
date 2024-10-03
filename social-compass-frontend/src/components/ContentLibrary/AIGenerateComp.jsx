import Description from "../Styles/Description";
import Heading from "../Styles/Heading";

const AIGenerateComp = ({image, heading, description}) => {
  return (
    <>
      <div className="border border-gray-200 rounded-md p-5 shadow-lg">
        <img src={image} alt="" className="mb-3"/>
        
        <Heading text={heading} />
        <Description text={description} />
        <div className="flex gap-5 mt-5">
          <button className="w-[100px] rounded-md border border-[#242565] text-[#242565] bg-white font-poppins text-xs px-5 py-2">
            Save
          </button>
          <button className="w-[100px] rounded-md border border-[#242565] text-white bg-[#242565] font-poppins text-xs px-5 py-2">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default AIGenerateComp;
