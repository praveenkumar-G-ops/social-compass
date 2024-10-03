import React from "react";
import profile from "../../assets/images/navbar/profile.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../redux/user/userSlice";

const AdPreviewComp = ({ description, watch, orientation, footer }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(setUsername(" Bradford"));
  }, [dispatch]);

  return (
    <div className="border shadow-md rounded-md">
      <div className="p-4">
        {/* Header div */}
        <div className="flex gap-4 items-center mb-4">
          <img src={profile} alt="" className="h-10 w-10 rounded-full" />
          <div>
            <div className="font-semibold">{username}</div>
            <div className="text-sm text-gray-400">Sponserd</div>
          </div>
        </div>

        {/* Ad description */}
        <div className="mb-4">
          {description
            .trim()
            .split(".")
            .slice(0, -1)
            .map((desc, index) => (
              <li key={index} className="text-sm text-gray-400 mb-1">
                {desc}
              </li>
            ))}
        </div>

        {/* Image and text */}
        <div
          className={`flex ${
            orientation === "right" ? "flex-row-reverse" : "flex-row"
          } items-center`}
        >
          <img src={watch} alt="Watch" className="w-1/2" />
          <div className={`w-1/2 ${orientation === "right" ? "pr-4" : "pl-4"}`}>
            <div className="font-semibold">Upgrade to Ultima</div>
            <div>Select this classic</div>
            <div>Watch Now!</div>
            <div className="font-semibold">Contact us</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center rounded-b-md w-full text-xs pl-5 py-1 bg-gray-100">
        <div className="text-gray-400 w-1/2">{footer}</div>
        <button className="bg-gray-200 px-3 text-xs py-1 text-gray-400 mr-2 rounded border">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default AdPreviewComp;
