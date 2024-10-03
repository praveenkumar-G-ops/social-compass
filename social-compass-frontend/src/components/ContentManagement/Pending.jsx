import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import { useSelector } from "react-redux";
import Button from "../../components/Styles/Button";
import Description from "../Styles/Description";

const Pending = ({ image, title, account, type, date }) => {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <div className="px-4">
        <div className="flex justify-between py-4 border border-gray-300 px-5 rounded-md my-3">
          <div className="flex items-center">
            <img
              src={image}
              alt={title}
              className="w-24 h-24 object-cover rounded mr-4"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-poppin text-sm text-gray-500">{title}</h3>
              <div className="flex gap-2">
                <img
                  src={account == "instagram" ? instagram : facebook}
                  alt=""
                  className="h-6 w-6"
                />
                <div className="text-gray-500">{username}</div>
              </div>
              <p className="font-poppins text-sm text-gray-500">{type}</p>
              <p className="text-xs text-blue-500">{date}</p>
            </div>
          </div>

          <div className=" flex flex-col justify-between">
            <div className="flex gap-5 justify-end">
              {/* edit icon */}
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.94983 18.9711L1.95312 18.9743C2.04027 19.0621 2.14391 19.1318 2.25808 19.1794C2.37226 19.227 2.49471 19.2516 2.61841 19.2517C2.7225 19.2516 2.82587 19.2344 2.92439 19.2009L8.28867 17.3812L18.5824 7.0875C19.2116 6.45816 19.5651 5.60462 19.5651 4.71464C19.5651 3.82467 19.2115 2.97116 18.5822 2.34188C17.9528 1.7126 17.0993 1.35909 16.2093 1.35913C15.3193 1.35917 14.4658 1.71275 13.8365 2.34208L3.54284 12.6358L1.7233 17.9999C1.66598 18.1667 1.65683 18.3463 1.6969 18.5181C1.73697 18.6898 1.82463 18.8468 1.94983 18.9711ZM14.6913 3.19682C15.0945 2.79676 15.6397 2.57274 16.2077 2.57383C16.7756 2.57492 17.32 2.80103 17.7216 3.20264C18.1232 3.60425 18.3493 4.14863 18.3504 4.71659C18.3515 5.28454 18.1274 5.82978 17.7274 6.23291L16.3737 7.58654L13.3376 4.55045L14.6913 3.19682ZM4.59714 13.291L12.4829 5.40518L15.519 8.44128L7.6332 16.327L3.03847 17.8857L4.59714 13.291Z"
                  fill="#377DFF"
                />
              </svg>

              {/* delete icon */}
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10013 4.88932V5.20742H12.2812V4.88932C12.2812 4.46748 12.1136 4.06293 11.8153 3.76464C11.5171 3.46636 11.1125 3.29879 10.6907 3.29879C10.2688 3.29879 9.86427 3.46636 9.56599 3.76464C9.26771 4.06293 9.10013 4.46748 9.10013 4.88932ZM7.82771 5.20742V4.88932C7.82771 4.13001 8.12934 3.40181 8.66625 2.86491C9.20316 2.328 9.93136 2.02637 10.6907 2.02637C11.45 2.02637 12.1782 2.328 12.7151 2.86491C13.252 3.40181 13.5536 4.13001 13.5536 4.88932V5.20742H18.3252C18.4939 5.20742 18.6557 5.27445 18.7751 5.39376C18.8944 5.51308 18.9614 5.6749 18.9614 5.84363C18.9614 6.01237 18.8944 6.17419 18.7751 6.2935C18.6557 6.41281 18.4939 6.47984 18.3252 6.47984H17.3658L16.1621 17.0206C16.0733 17.7969 15.7019 18.5134 15.1188 19.0334C14.5356 19.5534 13.7815 19.8406 13.0001 19.8403H8.38122C7.59986 19.8406 6.8457 19.5534 6.26254 19.0334C5.67938 18.5134 5.30801 17.7969 5.21925 17.0206L4.01554 6.47984H3.05613C2.8874 6.47984 2.72558 6.41281 2.60626 6.2935C2.48695 6.17419 2.41992 6.01237 2.41992 5.84363C2.41992 5.6749 2.48695 5.51308 2.60626 5.39376C2.72558 5.27445 2.8874 5.20742 3.05613 5.20742H7.82771ZM6.48404 16.8755C6.53715 17.3412 6.75974 17.771 7.10938 18.0831C7.45902 18.3952 7.91127 18.5677 8.37994 18.5678H13.0007C13.4694 18.5677 13.9217 18.3952 14.2713 18.0831C14.6209 17.771 14.8435 17.3412 14.8967 16.8755L16.0857 6.47984H5.29623L6.48404 16.8755ZM8.78203 8.70658C8.95076 8.70658 9.11259 8.77361 9.2319 8.89292C9.35121 9.01224 9.41824 9.17406 9.41824 9.34279V15.7049C9.41824 15.8736 9.35121 16.0355 9.2319 16.1548C9.11259 16.2741 8.95076 16.3411 8.78203 16.3411C8.6133 16.3411 8.45147 16.2741 8.33216 16.1548C8.21285 16.0355 8.14582 15.8736 8.14582 15.7049V9.34279C8.14582 9.17406 8.21285 9.01224 8.33216 8.89292C8.45147 8.77361 8.6133 8.70658 8.78203 8.70658ZM13.2355 9.34279C13.2355 9.17406 13.1685 9.01224 13.0492 8.89292C12.9299 8.77361 12.768 8.70658 12.5993 8.70658C12.4306 8.70658 12.2687 8.77361 12.1494 8.89292C12.0301 9.01224 11.9631 9.17406 11.9631 9.34279V15.7049C11.9631 15.8736 12.0301 16.0355 12.1494 16.1548C12.2687 16.2741 12.4306 16.3411 12.5993 16.3411C12.768 16.3411 12.9299 16.2741 13.0492 16.1548C13.1685 16.0355 13.2355 15.8736 13.2355 15.7049V9.34279Z"
                  fill="#377DFF"
                />
              </svg>
            </div>

            <div className="flex gap-5">
              <button className="text-xs font-poppins bg-white border border-[#242565] px-4 py-2 rounded-md">
                Send Feedback
              </button>
              <Button text={"Apply to publish"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pending;
