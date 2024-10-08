import { useCallback, useState } from "react";
import { FaGoogle, /*FaFacebook, FaApple*/ } from "react-icons/fa"; // Importing icons for social login buttons
import { MdEmail, MdLock } from "react-icons/md"; // Importing icons for email and password fields
import { useDispatch } from 'react-redux';
import { registerUser } from "../redux/features/user/userSlice";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const navigate = useNavigate();

  const onGoogleLogin = useCallback(async (e) => {
    // Handle Google login
    e.preventDefault();
    try {
      window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
    } catch (err) {
      console.log("Registration failed:", err);
      toast.error('Error in login,Please Try again');
    }
  }, []);

  // const onFacebookLogin = useCallback(() => {
  //   // Handle Facebook login
  // }, []);

  // const onAppleLogin = useCallback(() => {
  //   // Handle Apple login
  // }, []);

  const [userDetail, setUserDetails] = useState({});
  const dispatch = useDispatch();

  const getData = (e) => {
    setUserDetails({ ...userDetail, [e.target.name]: e.target.value });
  }

  // Handle login button click
  const onLogin = useCallback(async (e) => {
    e.preventDefault();
    if (userDetail.password !== userDetail.confirmPassword) {
      toast.error('Password doesn\'t match');
      return;
    }
    try {

      const resultAction = await dispatch(registerUser(userDetail)).unwrap();
      // console.log("Registration successful:", resultAction);
      toast.success(resultAction?.message);
      if (resultAction?.success) {
        navigate('/connect-accounts');
      }
    } catch (err) {
      console.log("Registration failed:", err);
      toast.error(err?.response?.data?.message);
    }

  }, [userDetail]);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[40%] bg-white flex flex-col justify-center items-stretch px-24">
        <h2 className="text-center text-2xl font-semibold mb-6">Sign-in</h2>


        {/* Email Input */}
        <div className="relative mb-4">
          <MdEmail className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="email"
            placeholder="Your email"
            name="email"
            onChange={getData}
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <MdLock className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="password"
            placeholder="Your password"
            name="password"
            onChange={getData}
          />
        </div>

        {/* password conform */}

        <div className="relative mb-6">
          <MdLock className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            onChange={getData}
          />
        </div>


        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-400">or</span>
        </div>



        {/* Social Login Buttons */}
        <button
          className="flex items-center justify-center w-full mb-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onGoogleLogin}
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        {/* <button
          className="flex items-center justify-center w-full mb-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onFacebookLogin}
        >
          <FaFacebook className="mr-2" />
          Continue with Facebook
        </button>
        <button
          className="flex items-center justify-center w-full mb-5 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={onAppleLogin}
        >
          <FaApple className="mr-2" />
          Continue with Apple
        </button> */}

        {/* Login Button */}
        <button
          className="w-full h-12 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={onLogin}
        >
          Login
        </button>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm">
          {/* <div className="text-gray-500">
            Don’t have an account?{" "}
            <span className="text-blue-500 cursor-pointer">Register</span>
          </div> */}
        </div>
      </div>
      <div className="w-[60%] bg-[#242565]"></div>
    </div>
  );
};

export default LoginPage;
