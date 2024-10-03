import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
const PopularReelsComp = ({ image, date, description, social, reach }) => {
  return (
    <>
      <div className="flex items-center space-x-4 p-2 gap-4 border rounded-lg">
        <div className="flex gap-5">
          <img
            src={image}
            alt="Reel thumbnail"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-grow">
            <p className="text-sm text-gray-500">{date}</p>
            <p className="text-xs my-2">{description}</p>
            <div className="flex items-center space-x-2 mt-1">
              {social === "Instagram" ? (
                <img src={instagram} alt="Instagram" className="w-4 h-4" />
              ) : (
                <img src={facebook} alt="Facebook" className="w-4 h-4" />
              )}
              <span className="text-xs">Post</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">Reach</span>
              <span className="text-sm text-gray-500">{reach}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularReelsComp;
