// import { useCallback } from "react";

// const LoginPage = () => {
//   const onFrameButtonClick = useCallback(() => {
//   }, []);

//   return (
//     <div className="flex w-full h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <div className="mb-10">
//           <h2 className="text-3xl font-semibold font-poppins text-center">LOGO</h2>
//         </div>
//         <div className="mb-8 ml-8">
//           <h1 className="text-4xl text-gray-700 font-semibold font-poppins mb-2">Let's get your account setup</h1>
//           <div className="text-sm text-gray-500 font-poppins">Email</div>
//           <input
//             className="w-10/12 h-9 mt-2 mb-4 px-4 rounded-lg border border-gray-300 outline-none "
//             type="text"
//             placeholder=""
//           />
//           <div className="text-sm text-gray-500 font-poppins">Create a Password</div>
//           <input
//             className="w-10/12 h-9 mt-2 mb-4 px-4 rounded-lg border border-gray-300 outline-none "
//             type="password"
//             placeholder=""
//           />
//           <div className="mb-4 flex justify-center w-9/12">
//             <div className="g-recaptcha" data-sitekey="your-site-key"></div>
//           </div>
//           <button
//             className="w-10/12 h-12 bg-[#242565] text-white rounded-lg hover:bg-darkslateblue"
//             onClick={onFrameButtonClick}
//           >
//             Sign up
//           </button>
//           <div className="flex gap-24 mt-4 text-base">
//             <div>
//               <span>I agree to </span>
//               <span className="text-blue-500">Rapogen's Terms of service</span>
//             </div>
//             <div>Already have an account?</div>
//           </div>
//         </div>
//       </div>
//       <div className="w-[40%] bg-[#242565]"></div>
//     </div>
//   );
// };

// export default LoginPage;



import { useCallback } from "react";
import { FaGoogle, /*FaFacebook, FaApple*/ } from "react-icons/fa"; // Importing icons for social login buttons
import { MdEmail, MdLock } from "react-icons/md"; // Importing icons for email and password fields

const LoginPage = () => {
  const onGoogleLogin = useCallback(() => {
    // Handle Google login
  }, []);

  // const onFacebookLogin = useCallback(() => {
  //   // Handle Facebook login
  // }, []);

  // const onAppleLogin = useCallback(() => {
  //   // Handle Apple login
  // }, []);

  const onLogin = useCallback(() => {
    // Handle login button click
  }, []);

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
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <MdLock className="absolute left-3 top-3 text-gray-500" />
          <input
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
            type="password"
            placeholder="Your password"
          />
        </div>
        {/* password conform */}


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
