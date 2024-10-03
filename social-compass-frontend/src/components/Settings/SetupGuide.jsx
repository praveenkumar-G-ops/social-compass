import tick from "../../assets/images/settings/tick.png";
import Heading from "../../components/Styles/Heading";
import Description from "../../components/Styles/Description";

const SetupGuide = () => (
  <div className="w-[800px] p-5 pl-10">
    <Heading text={"Setup Guide"} />

    <div className="border border-gray-200 my-5"></div>

    <div className="mb-10">
      <p className="font-poppins">Get the most out of our business portfolio</p>
      <Description
        text={
          "Busines portfolio bring together things  liike facebook page, instagram account and the people who work on them so you can manage them all in one place. learn more"
        }
      />
    </div>

    <div className="space-y-5">
      <div className="flex items-center">
        <span className="mr-2">
          <img src={tick} alt="" className="h-8 w-8 mt-2" />
        </span>
        <span className="font-poppins">Add business assets</span>
        <button className="ml-auto bg-white font-poppins text-xs text-gray-400 border border-gray-400 px-3 py-1 rounded">
          Add Assets
        </button>
      </div>
      <div className="flex items-center">
        <span className="mr-2">
          <img src={tick} alt="" className="h-8 w-8 mt-2" />
        </span>
        <span>Add business assets</span>
        <button className="ml-auto bg-white font-poppins text-xs text-gray-400 border border-gray-400 px-3 py-1 rounded">
          Invite people
        </button>
      </div>
      <div className="flex items-center">
        <span className="mr-2">
          <img src={tick} alt="" className="h-8 w-8 mt-2" />
        </span>
        <span>Add business assets</span>
        <button className="ml-auto bg-white font-poppins text-xs text-gray-400 border border-gray-400 px-3 py-1 rounded">
          Create Ad account
        </button>
      </div>
    </div>
  </div>
);

export default SetupGuide;
