const LinkModal = ({ isOpen, onClose, linkName, setLinkName, websiteURL, setWebsiteURL }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-40 right-[305px] flex ">
      <div className="bg-white p-2 rounded shadow-md w-48 h-52">
        <h1 className="text-sm font-bold mb-1">Add Link</h1>
        <div className="mb-4 font-poppins "
        >
          <input 
            type="text" 
            placeholder="Link name" 
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
            className="w-full text-xs p-1 border border-gray-300 rounded mb-2 font-poppins "
            
          />
          <input 
            type="text" 
            placeholder="Website URL" 
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            className="w-full p-1 text-xs border border-gray-300 rounded mb-2"
        
          />
          <p className="text-gray-500 text-xs font-poppins ">Provide your valid website URL</p>
        </div>
        <button 
          onClick={onClose} 
          className="w-full text-xs bg-[#242565] text-white p-1 rounded">
          Done
        </button>
      </div>
    </div>
  );
};

export default LinkModal;