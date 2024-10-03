import logout from "../assets/images/logout.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Heading from "./Styles/Heading";
import Description from "./Styles/Description";
import { logoutUser } from "../redux/user/userSlice";

const LogoutPopup = ({ onClose, onConfirm }) => {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelbtn = () => {
    onClose(); 
    navigate("/"); 
    console.log("Cancel button clicked");
  };

  const handleConfirmbtn = () => {
    dispatch(logoutUser());
    onConfirm(); 
    navigate("/login"); 
    console.log("Confirm button clicked");
  };

  return (
    <div className="bg-white flex flex-col items-center h-[300px] w-[300px] rounded-lg">
      <img src={logout} alt="Logout" className="h-[165px] w-[165px]" />
      <Heading text={`Hi, ${username}`} />
      <Description text="Are you sure you want to logout?" />
      <div className="flex gap-5 mt-5">
        <button onClick={handleCancelbtn} className="w-[100px] rounded-md border border-[#242565] text-[#242565] bg-white font-poppins text-xs px-5 py-2">
          No
        </button>
        <button onClick={handleConfirmbtn} className="w-[100px] rounded-md border border-[#242565] text-white bg-[#242565] font-poppins text-xs px-5 py-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default LogoutPopup;
