import React from 'react';
import scheduleimage from '../../assets/images/createAndSchedule/ScheduleImage.png'

const ScheduledMessage = () => {
  return (
    <div className="flex flex-col  rounded-md  w-[400px] h-[250px] bg-[rgba(255,255,255,1)] items-center justify-center">
      <div className="rounded-full">
      <img src={scheduleimage}  className="h-28 w-28 object-cover" />
      </div>
      <h2 className="mt-4 text-xl font-poopins font-semibold">Scheduled</h2>
      <p className="text-gray-600 font-poppins font-normal mt-4">Your post successfully scheduled</p>
    </div>
  );
};

export default ScheduledMessage;
