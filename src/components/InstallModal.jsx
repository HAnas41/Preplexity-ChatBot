import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const InstallModal = ({ visible, onHide }) => {
  const downloadOptions = [
    {
      id: 'mac',
      name: 'macOS',
      icon: 'pi pi-apple',
      description: 'For Mac computers (Intel & Apple Silicon)',
      version: 'Latest version',
      fileSize: '85.2 MB',
      requirements: 'macOS 10.15 or later',
      buttonText: 'Download for Mac',
      popular: false
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: 'pi pi-desktop',
      description: 'For Windows 10 and 11',
      version: 'Latest version',
      fileSize: '92.1 MB',
      requirements: 'Windows 10 or later',
      buttonText: 'Download for Windows',
      popular: true
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: 'pi pi-cog',
      description: 'For Ubuntu, Debian, and other distributions',
      version: 'Latest version',
      fileSize: '78.5 MB',
      requirements: 'Ubuntu 18.04+ or equivalent',
      buttonText: 'Download for Linux',
      popular: false
    }
  ];

  const renderDownloadCard = (option) => (
    <div
      key={option.id}
      className={`relative p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
        option.popular
          ? 'border-blue-500 bg-gray-900'
          : 'border-gray-700 bg-gray-800'
      }`}
    >
      {option.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <i className={`${option.icon} text-4xl text-blue-400`} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{option.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{option.description}</p>
        <div className="flex flex-col space-y-1 text-xs">
          <span className="text-gray-300">{option.version}</span>
          <span className="text-gray-500">{option.fileSize}</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-center mb-3">
          <span className="text-gray-400 text-xs">Requirements</span>
        </div>
        <div className="text-center">
          <span className="text-gray-300 text-xs">{option.requirements}</span>
        </div>
      </div>

      <Button
        label={option.buttonText}
        className="w-full p-3 font-medium transition-all duration-300"
        style={{
          backgroundColor: option.popular ? '#3B82F6' : '#374151',
          border: 'none',
          borderRadius: '8px',
          color: '#FFFFFF'
        }}
        onClick={() => {
          // Handle download logic here
          console.log(`Downloading for ${option.name}`);
          // You can add actual download URLs here
          // window.open(downloadUrl, '_blank');
        }}
        onMouseEnter={(e) => {
          if (option.popular) {
            e.currentTarget.style.backgroundColor = '#2563EB';
          } else {
            e.currentTarget.style.backgroundColor = '#4B5563';
          }
        }}
        onMouseLeave={(e) => {
          if (option.popular) {
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
      className="install-modal"
      style={{
        width: '90vw',
        maxWidth: '900px'
      }}
      header={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Download Perplexity</h2>
          <p className="text-gray-400">Get the app for your device and enjoy a better experience</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadOptions.map(renderDownloadCard)}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            All downloads are free and include automatic updates.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>Secure downloads</span>
            <span>•</span>
            <span>Auto-updates</span>
            <span>•</span>
            <span>Cross-platform sync</span>
          </div>
        </div>

        {/* Alternative download options */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-white font-medium mb-3">Other Options</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                label="Web App"
                className="p-2 text-xs"
                style={{
                  backgroundColor: '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#9CA3AF'
                }}
                onClick={() => {
                  console.log('Using web app');
                  onHide();
                }}
              />
              <Button
                label="Mobile App"
                className="p-2 text-xs"
                style={{
                  backgroundColor: '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#9CA3AF'
                }}
                onClick={() => {
                  console.log('Redirecting to mobile app stores');
                  onHide();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default InstallModal;
