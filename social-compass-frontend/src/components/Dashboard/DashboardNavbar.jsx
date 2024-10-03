import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../../redux/user/userSlice';
import searchIcon from '../../assets/images/navbar/search.png';
import notification from '../../assets/images/navbar/bell.png';
import profile from '../../assets/images/navbar/profile.png';
import Description from '../../components/Styles/Description';
import SettingsPage from '../../pages/SettingsPage';
import settingsImage from '../../assets/images/sidebar/settings.png';
import ProfileIcon from "../../assets/images/navbar/Profile_Icon.png"

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    dispatch(setUsername("Soundharya"));
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center p-2 bg-gray-100 mt-5 mr-10">
        {/* Dashboard and Search bar */}
        <div className="flex items-center ml-5 space-x-6">
          {/* Dashboard div */}
          <div>
            <div className="text-sm font-poppins font-semibold">Dashboard</div>
            <Description text={"Hello, Thomas. Welcome to Dashboard"} />
          </div>

          {/* Search bar */}
          <div className="flex items-center relative">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute left-3 h-5 w-5"
            />
            <input
              type="text"
              className="border border-gray-500 p-1 rounded-md w-[350px] h-9 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center">
          <img src={notification} alt="Notifications" className="h-6 w-6 mr-6" />

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-sm border-none bg-white flex items-center p-2 rounded-lg shadow-sm"
            >
              {username}
              <span className="ml-2">&#9662;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 bg-white border border-gray-300 mt-2 w-[200px] rounded-lg shadow-lg z-10">
                <div
                  onClick={() => handleOptionChange('')}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
                >
                  <img src={ProfileIcon} alt="Profile Icon" className="w-5 h-5 mr-2" />
                  {username}
                </div>
                <div
                  onClick={() => handleOptionChange('settings')}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                  <img src={settingsImage} alt="Settings" className="w-5 h-5 mr-2" />
                  Settings
                </div>
              </div>
            )}
          </div>

          {/* Profile Picture */}
          <div className="relative ml-4">
            <img
              src={profile}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <div className="bg-[#19F606] border-2 border-white rounded-full h-3 w-3 absolute right-0 top-0 z-10"></div>
          </div>
        </div>
      </div>

      {selectedOption === 'settings' && <SettingsPage />}
    </div>
  );
};

export default DashboardNavbar;
