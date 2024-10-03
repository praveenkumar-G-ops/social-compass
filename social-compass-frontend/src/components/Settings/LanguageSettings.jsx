import { useState } from "react";
import Button from "../../components/Styles/Button"
import Heading from "../Styles/Heading";
import Description from "../Styles/Description";

const LanguageSettings = () => {
    const [showModal, setShowModal] = useState(true);
    const [language, setLanguage] = useState("English (US)");
  
    return (
      <div>
        
        {/* {showModal && ( */}
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[500px]">
              <div className="flex justify-between mb-5">

              
              <Heading text={"Language Settings"}/>
              <button className="text-gray-400" onClick={() => setShowModal(false)}>X</button>
              </div>
              <Description text={"Choose the language"}/>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-xs text-gray-400 p-2 border border-gray-300 rounded my-4 w-[200px]"
              >
                <option value="English (US)">English (US)</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
             
             <div className="flex justify-end mt-10">
             <Button text={"Confirm"}  onClick={() => setShowModal(false)}/>
             </div>
              
            </div>
          </div>
        {/* )} */}
      </div>
    );
  };
  
export default LanguageSettings;  