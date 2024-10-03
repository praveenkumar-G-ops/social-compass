import { useCallback } from "react";
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';

const ConnectAccountsPage = () => {
  const onConnectInstagram = useCallback(() => {
    // Handle Instagram connect logic
  }, []);

  const onConnectFacebook = useCallback(() => {
    // Handle Facebook connect logic
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white px-6">
      <div className="absolute top-6 left-6">
        <h2 className="text-4xl font-semibold font-poppins">LOGO</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold font-poppins mb-12 text-gray-600">Connect your channels</h1>
        <div className="flex flex-row space-x-8 w-full h-72">
          <div className="flex flex-col items-center justify-center w-80 p-8 bg-white rounded-lg shadow-lg border border-red-300"
               style={{ boxShadow: '0 0 10px 3px rgba(255, 0, 0, 0.1)', borderColor: 'rgba(219, 219, 219, 1)' }}>
            <img src={instagram} alt="Instagram" className="w-16 h-16 mt-2" />
            <h2 className="text-2xl font-semibold mt-3">Instagram</h2>
            <p className="text-gray-500 mt-2 text-xl">Business account</p>
            <button
              className="mt-5 w-56 px-6 py-2 bg-[#242565] text-white rounded-lg"
              onClick={onConnectInstagram}
            >
              Connect account
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-80 p-8 bg-white rounded-lg shadow-lg border border-blue-200"
               style={{ boxShadow: '0 0 10px 3px rgba(54, 180, 223, 0.3)', borderColor: 'rgba(219, 219, 219, 1)' }}>
            <img src={facebook} alt="Facebook" className="w-20 h-20 mt-1 object-fill"/>
            <h2 className="text-2xl font-semibold mt-1">Facebook</h2>
            <p className="text-gray-500 mt-1 text-xl">facebook Page</p>
            <button
              className="mt-5 w-56 px-6 py-2 bg-[#242565] text-white rounded-lg"
              onClick={onConnectFacebook}
            >
              Connect account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectAccountsPage;
