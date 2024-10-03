import Button from "../../components/Styles/Button";
import Heading from "../../components/Styles/Heading";
import map from "../../assets/images/settings/map.png";

const AuthorizationVerification = () => (
  <div className="w-[800px] p-4">
    <div className="my-3 ml-3">
      <Heading text={"Authorization and Verifications"} />
    </div>
    <div className="border border-gray-200 mb-5"></div>

    <div className="flex justify-between p-4 border-b text-sm font-semibold text-gray-500">
      <div className="">Type</div>
      <div className="">Decsription</div>
      <div className=""></div>
    </div>

    <div className="p-4 flex justify-start">
      <img src={map} alt="Singapore flag" className="w-10 h-10 mr-4" />

      <p className="text-sm w-[250px] mt-2">
        Verification required by Singapore
      </p>

      <p className="text-sm text-gray-500 w-[300px] ml-5">
        Advertisers need to complete a verification process before running ads
        in certain countries, such as Singapore.
      </p>
      <Button text={"View details"} />
    </div>
  </div>
);

export default AuthorizationVerification;
