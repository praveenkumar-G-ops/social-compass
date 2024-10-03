import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import { useSelector } from "react-redux";
import Button from "../../components/Styles/Button";

const Ideas = ({ topic, type, account, status }) => {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <div className="flex p-5 ml-3 my-2">
        <div className="font-poppins w-1/3 text-gray-500">{topic}</div>
        <div className="w-1/3 flex gap-20">
          <div className="font-poppins text-gray-500">{type}</div>
          <div className="flex gap-2">
            <img
              src={account == "instagram" ? instagram : facebook}
              alt=""
              className="h-8 w-8"
            />
            <div className="mt-1 text-gray-500">{username}</div>
          </div>
        </div>
        <div className="w-1/3 flex gap-40">
          <Button text={"Approve"} />
          <button className="text-xs font-poppins bg-white border border-[#242565] px-4 py-2 rounded-md">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default Ideas;
