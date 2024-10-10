import React, { useState } from 'react';
import PlanCard from './Plancard';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">The Right Plan for Your Business</h2>
      <p className="text-center text-gray-600 mb-8">We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.</p>
      
      <div className="flex items-center space-x-4 mb-6">
        <span>Bill Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
            <div className="w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </div>
        </label>
        <span>Bill Annually</span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        <PlanCard 
          title="Secondary"
          price="123"
          features={['Upload Video with HD Resolution', 'Attachment & Post Scheduling']}
          unavailableFeatures={['Set your rates', 'Exclusive Deals', 'Advanced Statistics']}
          buttonText="Choose"
          isPrimary={false}
        />
        <PlanCard 
          title="Primary"
          price="123"
          discountText="Save $40"
          features={['Upload Video with HD Resolution', 'Attachment & Post Scheduling', 'Set your rates', 'Exclusive Deals']}
          unavailableFeatures={['Advanced Statistics']}
          buttonText="Try 1 month"
          isPrimary={true}
        />
        <PlanCard 
          title="Tertiary"
          price="123"
          features={['Upload Video with 4K Resolution', 'Attachment & Post Scheduling', 'Set your rates', 'Exclusive Deals', 'Advanced Statistics']}
          buttonText="Choose"
          isPrimary={false}
        />
      </div>
    </div>
  );
};

export default PricingPlans;
