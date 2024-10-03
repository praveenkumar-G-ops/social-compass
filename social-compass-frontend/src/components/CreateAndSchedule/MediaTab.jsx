import React from "react";
import imagegallery from '../../assets/images/createAndSchedule/ImageGallery.png'

const MediaTab = () => {
    return (
<div className="border border-gray-200 p-7 ml-6 mr-6 rounded-lg shadow-lg mt-6"
              style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '1px rgba(197, 197, 197, 1)' }}>
              <h3 className="text-lg font-semibold mt-0 text-gray-700">Media</h3>
              <p className="text-gray-500 mb-2">Share photos and videos on Instagram, Post can’t exceed 10 photos or videos.</p>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center p-2  border gap-1 border-gray-300 rounded-lg">
                  <img src={imagegallery} alt="Add photo" className="w-6 h-6 mr-2" /> Add photo/video
                  <svg className='mt-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.26719 7.01097C5.68327 7.75999 4.55063 7.76 3.96672 7.01097L0.341056 2.36012C-0.405584 1.40236 0.276887 0.00497305 1.49129 0.00497318L8.74261 0.00497394C9.95702 0.00497407 10.6395 1.40236 9.89285 2.36012L6.26719 7.01097Z" fill="#3D3D3D"/>
</svg>
                </button>
                

                <button className="flex items-center justify-center   p-2  border border-gray-300 rounded-lg gap-1">
                  <svg className="text-gray-500 w-6 h-6" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5013 2.78316C12.2196 2.78316 12.9085 2.49782 13.4164 1.98991C13.9243 1.482 14.2096 0.793124 14.2096 0.0748291H15.4596C15.4596 0.793124 15.745 1.482 16.2529 1.98991C16.7608 2.49782 17.4497 2.78316 18.168 2.78316V4.03316C17.4497 4.03316 16.7608 4.3185 16.2529 4.82641C15.745 5.33433 15.4596 6.0232 15.4596 6.7415H14.2096C14.2096 6.0232 13.9243 5.33433 13.4164 4.82641C12.9085 4.3185 12.2196 4.03316 11.5013 4.03316V2.78316ZM2.33464 4.2415C2.33464 3.79947 2.51023 3.37555 2.82279 3.06298C3.13535 2.75042 3.55927 2.57483 4.0013 2.57483H9.83463V0.908162H4.0013C3.11725 0.908162 2.2694 1.25935 1.64428 1.88447C1.01916 2.50959 0.667969 3.35744 0.667969 4.2415V12.5748C0.667969 13.4589 1.01916 14.3067 1.64428 14.9319C2.2694 15.557 3.11725 15.9082 4.0013 15.9082H14.0013C14.8854 15.9082 15.7332 15.557 16.3583 14.9319C16.9834 14.3067 17.3346 13.4589 17.3346 12.5748V8.40816H15.668V12.5748C15.668 13.0169 15.4924 13.4408 15.1798 13.7533C14.8673 14.0659 14.4433 14.2415 14.0013 14.2415H4.0013C3.55927 14.2415 3.13535 14.0659 2.82279 13.7533C2.51023 13.4408 2.33464 13.0169 2.33464 12.5748V4.2415Z" fill="url(#paint0_linear_248_3794)" />
                    <defs>
                      <linearGradient id="paint0_linear_248_3794" x1="9.41797" y1="0.0748291" x2="9.41797" y2="15.9082" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF09C9" />
                        <stop offset="1" stopColor="#666666" />
                      </linearGradient>
                    </defs>
                  </svg>AI Generate
                </button>
              </div>
            </div>
    )
}

export default MediaTab;
