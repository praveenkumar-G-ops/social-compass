import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Ads and Campaigns
import CreateCampaignPage from "./pages/AdsAndCampaigns/CreateCampaignPage";
import AddProductPage from "./pages/AdsAndCampaigns/AddProductPage";
import AdPreviewPage from "./pages/AdsAndCampaigns/AdPreviewPage";
import TargettingPage from "./pages/AdsAndCampaigns/TragettingPage";
import LaunchAdsPage from "./pages/AdsAndCampaigns/LaunchAdsPage";
import DiscoverAdsPage from "./pages/AdsAndCampaigns/DiscoverAdsPage";
import DiscoverAdsWithFilterPage from "./pages/AdsAndCampaigns/DiscoverAdsWithFilterPage";
import AdReportPage from "./pages/AdsAndCampaigns/AdReportPage";
import AdAndCampaignStatusPage from "./pages/AdsAndCampaigns/AdAndCampaignStatusPage";

// Content Library
import AIGeneratePage from "./pages/ContentLibrary/AIGeneratePage";
import TrendingPage from "./pages/ContentLibrary/TrendingPage";
import DraftPage from "./pages/ContentLibrary/DraftPage";
import SavedPage from "./pages/ContentLibrary/SavedPage";

// Analytics and reports
import AnalyticsAndReportTruePage from "./pages/AnalyticsAndReports/AnalyticsAndReportsTruePage";

// Competitor Analysis
import CompetitorDiscoverPage from "./pages/CompetitorAnalysis/CompetitorDiscoverPage";
import CompetitorAnalysisWithCompetitorPage from "./pages/CompetitorAnalysis/CompetitorAnalysisWithCompetitorPage";
import CompetitorAnalysisResultsPage from "./pages/CompetitorAnalysis/CompetitorAnalysisResultsPage";

// Content Management
import ContentApprovalPage from "./pages/ContentManagement/ContentApprovalPage";
import ContentCalenderPage from "./pages/ContentManagement/ContentCalenderPage";

// Engagement
import BroadcastsPage from "./pages/Engagement/BroadcastsPage";
import CommentsPage from "./pages/Engagement/CommentsPage";
import InboxPage from "./pages/Engagement/InboxPage";
import AutomatedResponse from './pages/Engagement/AutomatedResponse';
import CreateResponse from "./pages/Engagement/CreateResponse";

import KeywordInput from "./pages/Automation/KeywordInput";
import PublicReply from "./pages/Automation/PublicReply";
import ReplyInDm from "./pages/Automation/ReplyInDm";
import LoginPage from "./pages/LoginPage";
import ConnectAccountsPage from "./pages/ConnectAccountsPage";
import CommentAutomationPage from "./pages/Automation/CommentAutomationPage";
import StoryAutomationPage from "./pages/Automation/StoryAutomationPage";
import EmailAutomationPage from "./pages/Automation/EmailAutomationPage";
import CreatePostPage from "./pages/CreateAndSchedule/CreatePostPage";
import CreatePostFbPage from './pages/CreateAndSchedule/CreatePostFbPage'
// import SignupPage from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="signup" element={<SignupPage/>}/> */}
        

        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/connect-accounts" element={<ConnectAccountsPage/>}/>


        {/* Create and Schedule */}
        <Route path="/create-post-instagram" element={<CreatePostPage/>}/>
        <Route path="/create-post-facebook" element={<CreatePostFbPage/>}/>


        {/* Content Management */}
        <Route path="/content-approval" element={<ContentApprovalPage />} />
        <Route path="/content-calender" element={<ContentCalenderPage />} />


        {/* Engagement */}
        <Route path="/broadcasts" element={<BroadcastsPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/automated-response" element={<AutomatedResponse/>} />
        <Route path="/create-response" element={<CreateResponse/>} />


        {/* Automation */}
        <Route path="/comment-automation" element={<CommentAutomationPage/>}/>
        <Route path="/comment-automation-addKeywords" element={<KeywordInput/>}/>
        <Route path="/comment-automation-publicreply" element={<PublicReply/>}/>
        <Route path="/comment-automation-replyindm" element={<ReplyInDm/>}/>

        <Route path="/story-automation" element={<StoryAutomationPage/>}/>
        <Route path="/email-automation" element={<EmailAutomationPage/>}/>


        {/* Ads and Campaign */}
        <Route path="/create-campaign" element={<CreateCampaignPage />} />

        <Route path="/add-product" element={<AddProductPage/>}/>
        <Route path="/ad-preview" element={<AdPreviewPage/>}/>
        <Route path="/targetting" element={<TargettingPage/>}/>
        <Route path="/launch-ad" element={<LaunchAdsPage/>}/>

        <Route path="/discover-ads" element={<DiscoverAdsPage />} />
        <Route path="/discover-ads-filter" element={<DiscoverAdsWithFilterPage/>}/>

        <Route path="/ad-report" element={<AdReportPage />} />

        <Route path="/ad-campaign-status" element={<AdAndCampaignStatusPage />} />


        {/* Content Library */}
        <Route path="/ai-generate" element={<AIGeneratePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/draft" element={<DraftPage />} />
        <Route path="/saved" element={<SavedPage />} />


        {/* Analytics and reports */}
        <Route path="/analytics" element={<AnalyticsAndReportTruePage/>}/>


        {/* Competitor Analysis */}
        <Route path="/competitor-discover" element={<CompetitorDiscoverPage />} />
        <Route path="/competitor-analysis" element={<CompetitorAnalysisWithCompetitorPage />} />
        <Route path="/competitor-analysis-results" element={<CompetitorAnalysisResultsPage/>}/>
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;