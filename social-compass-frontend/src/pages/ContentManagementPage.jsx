import Navbar from "../components/Navbar";
import Heading from "../components/Styles/Heading";
import SubHeading from "../components/Styles/SubHeading";
import Button from "../components/Styles/Button";
import Description from "../components/Styles/Description";
import noContent from "../assets/images/contentManagement/noContent.png"

const ContentManagementPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <Heading text={"Content management"}/>
             
              <div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-96 h-96 mb-4">
                    <img src={noContent} alt="image" />
                  </div>
                  <SubHeading text={"No Content available"}/>
                  <div className="flex justify-center my-2">
                  <Button text={"Create post"}/>
                  </div>
                  
                  <Description text={"Create some post to explore content Management"}/>
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContentManagementPage;
