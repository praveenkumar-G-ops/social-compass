import ReplyComp from "./ReplyComp";

const ChatInterface = ({ selectedUser }) => {
    if (!selectedUser) return null;
  
    return (
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src={selectedUser.profileIcon}
              alt={selectedUser.profileName}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold">{selectedUser.profileName}</h3>
              <p className="text-sm text-gray-500">1 comment · Sep 3</p>
            </div>
          </div>
          <button className="text-gray-500">•••</button>
        </div>
  
        <div className="flex-grow overflow-y-auto mb-4">
          <div className="bg-blue-100 rounded-lg p-3 w-max">
            <p className="font-semibold">{selectedUser.profileName}</p>
            <p>{selectedUser.msg.split("-")[1].trim()}</p>
          </div>
          <div className="flex gap-4">
            <div className="text-xs text-gray-400">1m</div>
            <div className="text-xs text-gray-400">Like</div>
            <div className="text-xs text-gray-400">Reply</div>
            <div className="text-xs text-blue-600">Send Message</div>
            <div className="text-xs text-gray-400">Hide</div>
          </div>
          <div className="">
            <ReplyComp />
          </div>
        </div>
  
        <ReplyComp />
      </div>
    );
  };


  export default ChatInterface;