import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const UpgradeModal = ({ visible, onHide }) => {
  const upgradePlans = [
    {
      id: 'pro',
      title: 'Pro',
      description: 'Advanced AI capabilities with unlimited searches and priority support',
      price: '$20',
      period: '/month',
      features: [
        'Unlimited AI searches',
        'Priority support',
        'Advanced models access',
        'Custom AI agents',
        'API access'
      ],
      buttonText: 'Upgrade to Pro',
      popular: false
    },
    {
      id: 'unlimited',
      title: 'Unlimited',
      description: 'Ultimate AI experience with enterprise-grade features',
      price: '$40',
      period: '/month',
      features: [
        'Everything in Pro',
        'Enterprise security',
        'Team collaboration',
        'Advanced analytics',
        'Dedicated support'
      ],
      buttonText: 'Upgrade to Unlimited',
      popular: true
    }
  ];

  const renderPlanCard = (plan) => (
    <div
      key={plan.id}
      className={`relative p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
        plan.popular
          ? 'border-blue-500 bg-gray-900'
          : 'border-gray-700 bg-gray-800'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-3xl font-bold text-white">{plan.price}</span>
          <span className="text-gray-400 ml-1">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <i className="pi pi-check text-green-400 mr-3 text-sm" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        label={plan.buttonText}
        className="w-full p-3 font-medium transition-all duration-300"
        style={{
          backgroundColor: plan.popular ? '#3B82F6' : '#374151',
          border: 'none',
          borderRadius: '8px',
          color: '#FFFFFF'
        }}
        onClick={() => {
          // Handle upgrade logic here
          console.log(`Upgrading to ${plan.title}`);
          onHide();
        }}
        onMouseEnter={(e) => {
          if (plan.popular) {
            e.currentTarget.style.backgroundColor = '#2563EB';
          } else {
            e.currentTarget.style.backgroundColor = '#4B5563';
          }
        }}
        onMouseLeave={(e) => {
          if (plan.popular) {
            e.currentTarget.style.backgroundColor = '#3B82F6';
          } else {
            e.currentTarget.style.backgroundColor = '#374151';
          }
        }}
      />
    </div>
  );

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      modal
      className="upgrade-modal"
      style={{
        width: '90vw',
        maxWidth: '800px'
      }}
      header={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Upgrade Your Experience</h2>
          <p className="text-gray-400">Choose the perfect plan for your AI needs</p>
        </div>
      }
      headerClassName="border-b border-gray-700 bg-gray-900 p-6"
      contentClassName="p-0 bg-gray-900"
      closeOnEscape
      closable
      closeIcon="pi pi-times"
      closeIconClassName="text-gray-400 hover:text-white transition-colors duration-200"
      position="center"
      draggable={false}
      resizable={false}
      blockScroll={true}
      maskClassName="modal-backdrop"
    >
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upgradePlans.map(renderPlanCard)}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            All plans include a 7-day free trial. Cancel anytime.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>Secure payment</span>
            <span>•</span>
            <span>24/7 support</span>
            <span>•</span>
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UpgradeModal;
