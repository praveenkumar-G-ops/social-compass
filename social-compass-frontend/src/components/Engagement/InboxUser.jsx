const InboxUser = ({ profileIcon, profileName, msg, time }) => {
    return (
      <div className="flex items-center p-4  cursor-pointer">
        <img
          src={profileIcon}
          alt=""
          className="h-12 w-12 rounded-full mr-3"
        />
        <div className="">
          <div className="flex items-center gap-24">
            <p className=" text-sm">{profileName}</p>
            <p className="text-xs text-gray-500 ">{time}</p>
          </div>
          <div className="w-1/3">
          <p className="text-sm text-gray-600 truncate">{msg}</p>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default InboxUser;
  