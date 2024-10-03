import Navbar from "../components/Navbar";
import image from "../assets/images/createAndSchedule/manCreatingWebsite.png";
import Heading from "../components/Styles/Heading";
import Button from "../components/Styles/Button";
import Description from "../components/Styles/Description";
const CreateAndSchedulePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Create Post"} />
          <div className="flex flex-col items-center justify-center mt-24">
            <img
              src={image}
              alt="No Content"
              className="w-[400px] h-[400px] mb-4"
            />
            <div className="flex justify-center mb-2">
              <Button text={"Connect accounts"} />
            </div>
            <Description text={"Connect your accounts to create post"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAndSchedulePage;
