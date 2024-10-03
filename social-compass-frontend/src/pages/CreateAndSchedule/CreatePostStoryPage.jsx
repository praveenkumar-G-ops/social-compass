import { useState, useRef, useEffect } from "react";
import MediaTab from "../../components/CreateAndSchedule/MediaTab";
import CreatePostStoryImage from "../../assets/images/createAndSchedule/CreatePostStoryImage.png";
import BoostTab from "../../components/CreateAndSchedule/BoostTab.jsx";
import LinkModal from "../../components/CreateAndSchedule/LinkModal";
import ScheduledMessage from "../../components/CreateAndSchedule/ScheduleMessage";
import { useDispatch } from "react-redux";
import { setSidebarItem } from "../../redux/sidebar/sidebarSlice";

const CreatePostStoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebarItem("Create and schedule"));
  }, [dispatch]);

  const [linkName, setLinkName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [previewImage, setPreviewImage] = useState(CreatePostStoryImage);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScheduledMessageVisible, setIsScheduledMessageVisible] =
    useState(false);
  const scheduledMessageRef = useRef(null);

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsScheduledMessageVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      scheduledMessageRef.current &&
      !scheduledMessageRef.current.contains(event.target)
    ) {
      setIsScheduledMessageVisible(false);
    }
  };

  useEffect(() => {
    if (isScheduledMessageVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isScheduledMessageVisible]);

  return (
    <div className="bg-gray-100 flex flex-col p-6 relative overflow-hidden">
      <h2 className="text-xl font-bold mb-4 ml-10 text-gray-700">
        Create post &gt; Story
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-md max-w-[935px] p-6 mt-4">
          <div className="mb-4 w-[910px] -ml-6 -mr-6 -mt-6">
            <MediaTab />
          </div>
          <div
            className="flex flex-col relative"
          >
            <div className="mt-1 ml-4">
              <h2 className="text-gray-700 text-sm font-semibold font-poppins -mb-3">
                Instagram story preview
              </h2>
            </div>
            <div className="p-4 rounded-lg h-96 flex items-center ml-72 -mb-2">
              {previewImage ? (
                <img
                  src={CreatePostStoryImage}
                  alt="Preview"
                  className="max-h-full w-[160px]"
                />
              ) : (
                <span className="text-gray-500">No image selected</span>
              )}
            </div>

            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center px-3 py-0 bg-white border text-center border-gray-300 font-poppins rounded shadow hover:shadow-md"
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_250_4609)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.2827 10.0886C18.8828 9.70336 19.6113 9.57225 20.308 9.72414C21.0048 9.87603 21.6126 10.2985 21.9979 10.8985C22.3832 11.4986 22.5143 12.2272 22.3624 12.9239C22.2105 13.6206 21.788 14.2285 21.188 14.6138L18.9254 16.0664C18.7254 16.1948 18.5846 16.3974 18.5339 16.6297C18.4833 16.8619 18.527 17.1048 18.6554 17.3048C18.7839 17.5048 18.9865 17.6456 19.2187 17.6963C19.451 17.7469 19.6938 17.7032 19.8938 17.5748L22.1564 16.1221C23.1565 15.48 23.8606 14.4669 24.1137 13.3057C24.3669 12.1445 24.1484 10.9302 23.5063 9.93012C22.8642 8.93 21.8511 8.22593 20.6898 7.97278C19.5286 7.71963 18.3144 7.93814 17.3143 8.58025L15.0517 10.0329C14.8517 10.1613 14.7109 10.3639 14.6602 10.5962C14.6096 10.8284 14.6533 11.0713 14.7817 11.2713C14.9101 11.4713 15.1128 11.6121 15.345 11.6628C15.5773 11.7134 15.8201 11.6697 16.0201 11.5413L18.2827 10.0886ZM18.9811 12.8354C18.8527 12.6354 18.6501 12.4946 18.4179 12.4439C18.1856 12.3933 17.9428 12.437 17.7427 12.5654L11.7092 16.4391C11.5092 16.5676 11.3684 16.7702 11.3178 17.0024C11.2671 17.2347 11.3108 17.4775 11.4393 17.6775C11.5677 17.8776 11.7703 18.0184 12.0025 18.069C12.2348 18.1196 12.4776 18.0759 12.6777 17.9475L18.7112 14.0738C18.9112 13.9454 19.052 13.7428 19.1026 13.5105C19.1533 13.2783 19.1096 13.0354 18.9811 12.8354ZM10.5266 12.9382C10.7266 12.8097 10.9694 12.766 11.2017 12.8167C11.4339 12.8673 11.6366 13.0081 11.765 13.2081C11.8934 13.4082 11.9371 13.651 11.8865 13.8833C11.8358 14.1155 11.695 14.3181 11.495 14.4465L9.23243 15.8992C8.63236 16.2844 8.20992 16.8923 8.05803 17.589C7.90614 18.2858 8.03724 19.0143 8.42251 19.6144C8.80777 20.2145 9.41563 20.6369 10.1124 20.7888C10.8091 20.9407 11.5376 20.8096 12.1377 20.4243L14.4003 18.9717C14.6003 18.8432 14.8431 18.7995 15.0754 18.8502C15.3076 18.9008 15.5103 19.0416 15.6387 19.2416C15.7671 19.4417 15.8108 19.6845 15.7602 19.9168C15.7095 20.149 15.5687 20.3516 15.3687 20.48L13.1061 21.9327C12.106 22.5748 10.8918 22.7933 9.73057 22.5402C8.56934 22.287 7.55624 21.5829 6.91413 20.5828C6.27203 19.5827 6.05351 18.3685 6.30666 17.2072C6.55982 16.046 7.26389 15.0329 8.26401 14.3908L10.5266 12.9382Z"
                      fill="#377DFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_250_4609">
                      <rect
                        width="21.51"
                        height="21.51"
                        fill="white"
                        transform="matrix(-0.841494 0.540266 0.540266 0.841494 18.45 0.395752)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Add link
              </button>
            </div>
          </div>
          <div className="-ml-6 -mr-6 -mb-1 mt-6">
            <BoostTab />
          </div>
        </div>
      </div>
      <div className="absolute min-h-screen bg-gray-100">
        <LinkModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          linkName={linkName}
          setLinkName={setLinkName}
          websiteURL={websiteURL}
          setWebsiteURL={setWebsiteURL}
        />
        {isScheduledMessageVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div ref={scheduledMessageRef}>
              <ScheduledMessage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePostStoryPage;
