import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const CreateAndScheduleHoverButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Create and schedule"));
    navigate(path);
  };

  return (
    <div
      className="absolute left-full ml-2 bg-[#27264E] text-white rounded shadow-lg top-0 z-50"
      style={{ width: "200px" }}
    >
      <button
        className="block w-full text-left px-4 py-3 border-b border-gray-500 hover:bg-[#3E3D6D] whitespace-nowrap"
        onClick={() => handleButtonClick('/create-post-instagram')}
      >
        Instagram
      </button>
      <button
        className="block w-full text-left px-4 py-3 hover:bg-[#3E3D6D] whitespace-nowrap"
        onClick={() => handleButtonClick('/create-post-facebook')}
      >
        Facebook
      </button>
    </div>
  );
};

export default CreateAndScheduleHoverButtons;
