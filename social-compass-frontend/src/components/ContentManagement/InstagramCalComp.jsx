

  import instagram from "../../assets/images/instagram.png";

  const InstagramCalComp = ({ description }) => {
    return (
      <div className="relative">
        <div className="flex gap-2 bg-gray-300 rounded-lg shadow-sm p-2">
          <div className="bg-white w-1/2"></div>
          <div className="text-[0.3rem] text-gray-600">{description}</div>
        </div>
        <img 
          src={instagram} 
          alt="Instagram" 
          className="h-8 w-8 absolute -top-5 right-1 rounded-full p-1" 
        />
      </div>
    );
  };
  
  export default InstagramCalComp;