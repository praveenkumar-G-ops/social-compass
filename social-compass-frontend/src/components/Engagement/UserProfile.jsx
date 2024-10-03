import group from "../../assets/images/engagement/group.png";

const UserProfile = ({ profileIcon, profileName, msg, time }) => {


  return (
    <>
      <div className="flex p-4 gap-2 justify-between w-full">
        <img
          src={profileIcon}
          alt=""
          className="h-12 w-12 rounded-full absolute"
        />

        <div className="ml-12">
          <p className="text-sm font-poppins text-gray-700">{profileName}</p>
          <p className="text-sm font-semibold">{msg}</p>
        </div>

        <div className="font-poppins text-gray-500 mb-2 flex justify-end text-sm">
          {time}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
