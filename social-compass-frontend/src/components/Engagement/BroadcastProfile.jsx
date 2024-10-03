import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import group from "../../assets/images/engagement/group.png";

const BroadcastProfile = ({groupIcon, social, groupName, msg, time}) => {
  return (
    <>
      <div className="flex p-4 gap-2">
        <div className="m-2">
          <img src={groupIcon} alt="" className="h-12 w-12 rounded-full absolute"/>
          <img src={social == "instagram" ? instagram : facebook} alt="" className="h-5 w-5 bg-white relative rounded-full top-8 left-8"/>
        </div>

        <div className="relative left-8">
          <p className="text-sm font-poppins text-gray-700">{groupName}</p>
          <p className="text-sm">{msg}</p>
        </div>

        <div>
          <div className="font-poppins text-gray-500 mb-2 flex justify-end text-sm">{time}</div>
          <img src={group} alt=""  className="h-6"/>
        </div>
      </div>
    </>
  );
};

export default BroadcastProfile;
