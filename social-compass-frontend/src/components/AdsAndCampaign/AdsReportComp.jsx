const AdsReportComp = ({ title, number, status, percentage }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-36">
        <h3 className="text-sm font-semibold text-gray-400 mb-2 text-center">{title}</h3>
        <div className="flex flex-col">
          <div className="text-3xl font-bold text-gray-900 text-center">{number}</div>
          <div className="flex items-center text-sm mt-1 text-center">
            <span className={`${status === 'increasing' ? 'text-green-500' : 'text-red-500'} mr-1`}>
              {status === 'increasing' ? '↑' : '↓'}
              {percentage}%
            </span>
            <span className="text-gray-500">this month</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdsReportComp;