import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const CompetitorAnalysisHoverButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (path) => {
    dispatch(setSidebarItem("Competitor Analysis"));
    navigate(path);
  };

  return (
    <div
      className="absolute left-full ml-2 bg-[#27264E] text-white rounded shadow-lg top-0 z-50"
      style={{ width: "200px" }}
    >
      <button
        className="block w-full text-left px-4 py-3 border-b border-gray-500 hover:bg-[#3E3D6D] whitespace-nowrap"
        onClick={() => handleButtonClick('/competitor-discover')}
      >
        Competitor discover
      </button>
      <button
        className="block w-full text-left px-4 py-3 hover:bg-[#3E3D6D] whitespace-nowrap"
        onClick={() => handleButtonClick('/competitor-analysis')}
      >
        Competitor analysis
      </button>
    </div>
  );
};

export default CompetitorAnalysisHoverButtons;
