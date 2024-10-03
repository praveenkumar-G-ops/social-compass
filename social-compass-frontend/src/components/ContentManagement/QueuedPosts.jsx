import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import { useSelector } from "react-redux";

const QueuedPosts = ({ image, title, account, type, date }) => {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <div className="px-4">
        <div className="flex justify-between py-4 border border-gray-300 px-5 rounded-md my-3">
          <div className="flex items-center">
            <img
              src={image}
              alt={title}
              className="w-24 h-24 object-cover rounded mr-4"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppin text-sm text-gray-500">{title}</h3>
              <div className="flex gap-2">
                <img
                  src={account == "instagram" ? instagram : facebook}
                  alt=""
                  className="h-6 w-6"
                />
                <div className="text-gray-500">{username}</div>
              </div>
              <p className="font-poppins text-sm text-gray-500">{type}</p>
              <p className="text-xs text-blue-500">{date}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
          <button className="text-xs font-poppins bg-white border border-[#242565] px-4 py-2 rounded-md">
            View Feedback
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueuedPosts;
