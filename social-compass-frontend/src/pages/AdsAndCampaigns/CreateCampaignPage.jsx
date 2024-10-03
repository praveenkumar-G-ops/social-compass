import Navbar from "../../components/Navbar";
import SidebarComp from "../../components/SidebarComp";

const CreateCampaignPage = ()=>{
    return (
        <div className="flex h-screen bg-gray-100">
          <SidebarComp/>
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <div>
            CreateCampaignPage
            </div>
          </div>
        </div>
      );
}

export default CreateCampaignPage;