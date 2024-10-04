import { useCallback } from "react";
import { FaGoogle, /*FaFacebook, FaApple*/ } from "react-icons/fa"; // Importing icons for social login buttons
import { MdEmail, MdLock } from "react-icons/md"; // Importing icons for email and password fields
import {  useNavigate, Link } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate(); 
  const onGoogleSignup = useCallback(() => {
    // Handle Google signup
  }, []);

  // const onFacebookSignup = useCallback(() => {
  //   // Handle Facebook signup
  // }, []);

  // const onAppleSignup = useCallback(() => {
  //   // Handle Apple signup
  // }, []);

  const onSignup = useCallback(() => {
    // Handle signup button click
    navigate("./ConnectAccountsPage.jsx")
  }, [navigate]);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[40%] bg-white flex flex-col justify-center items-stretch px-24">
        <h2 className="text-center text-2xl font-semibold mb-6">Sign-up</h2>

      

        

        {/* Email Input */}
        <div className="relative mb-4">
          <MdEmail className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="email"
            placeholder="Your email"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <MdLock className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="password"
            placeholder="Create a password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="relative mb-6">
          <MdLock className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="password"
            placeholder="Confirm your password"
          />
        </div>


        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-400">or</span>
        </div>



          {/* Social Signup Buttons */}
          <button
          className="flex items-center justify-center w-full mb-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onGoogleSignup}
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        {/* <button
          className="flex items-center justify-center w-full mb-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onFacebookSignup}
        >
          <FaFacebook className="mr-2" />
          Continue with Facebook
        </button>
        <button
          className="flex items-center justify-center w-full mb-5 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onAppleSignup}
        >
          <FaApple className="mr-2" />
          Continue with Apple
        </button> */}

        {/* Signup Button */}
        <button
          className="w-full h-12 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={onSignup}
        >
          Sign up
        </button>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="text-gray-500">
            Already have an account?{" "}
            <Link to ="/login" className="text-blue-500 cursor-pointer">Sign-in</Link>
          </div>
        </div>
      </div>
      <div className="w-[60%] bg-[#242565]"></div>
    </div>
  );
};

export default SignupPage;
