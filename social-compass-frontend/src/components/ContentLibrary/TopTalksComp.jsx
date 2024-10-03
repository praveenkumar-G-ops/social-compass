import Description from "../Styles/Description";
import Heading from "../Styles/Heading";

const TopTalksComp = ({ image, heading, description }) => {
  return (
    <>
      <div className="border border-gray-200 bg-white rounded-xl w-[290px] p-5 shadow-2xl">
        <div className="bg-[#B3B3B3] rounded-md h-[120px] w-[250px] mb-5"></div>
        <Heading text={heading} />
        <Description text={description} />
        <div className="flex gap-5 mt-5">
          <div className="bg-[#FFE2E2] p-1 text-gray-400 text-xs">
            # markettrends
          </div>
          <div className="bg-[#E6E2FF] p-1 text-gray-400 text-xs">
            # Branding
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTalksComp;
