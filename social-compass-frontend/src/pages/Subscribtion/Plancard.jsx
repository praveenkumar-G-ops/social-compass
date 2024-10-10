import React from 'react';

const PlanCard = ({ title, price, features, unavailableFeatures, buttonText, discountText, isPrimary }) => {
  return (
    <div className={`relative p-6 border rounded-lg ${isPrimary ? 'bg-indigo-900 text-white shadow-lg' : 'bg-white text-gray-900'}`}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {discountText && (
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded">
          {discountText}
        </div>
      )}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
        {unavailableFeatures && unavailableFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-3xl font-bold mb-4">${price}/month</p>
      <button className={`w-full py-2 rounded-lg ${isPrimary ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
