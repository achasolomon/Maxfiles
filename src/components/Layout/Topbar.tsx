import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import InitiateWorkflow from '../Navigation/InitiateWorkflow';
import FileUpload from '../commons/FileUpload';
import UserMenu from '../Navigation/UserMenu';
import SearchBar from '../commons/SearchBar';
import { TopbarProps, TooltipProps } from './types';
import { Switch } from '@headlessui/react'; 

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => (
  <div className="relative group">
    {children}
    {text && (
      <div className="absolute left-full ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </div>
    )}
  </div>
);

const Topbar: React.FC<TopbarProps> = ({ onSidebarToggle, isSidebarCollapsed }) => {
  const [isAdmin, setIsAdmin] = useState(true); // Default to admin

  const handleSearch = (query: string): void => {
    console.log('Searching for:', query);
  };

  const handleFileUpload = (file: File): void => {
    console.log('File selected:', file.name);
  };

  const toggleRole = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Tooltip text={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
              <button
                onClick={onSidebarToggle}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Menu className="h-6 w-6" />
              </button>
            </Tooltip>

            <Tooltip text={isSidebarCollapsed ? "Initiate Workflow" : null}>
              <div className="relative z-10"> {/* Added relative positioning and z-index */}
                <InitiateWorkflow />
              </div>
            </Tooltip>
          </div>

          <div className="flex-1 mx-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex items-center space-x-4">
            <Tooltip text={isSidebarCollapsed ? "Upload File" : null}>
              <div>
                <FileUpload onFileSelect={handleFileUpload} />
              </div>
            </Tooltip>

            {/* Toggle between Admin and User */}
            <div className="flex items-center space-x-2">
              <span className={`${!isAdmin ? 'text-gray-600 font-sarabun' : 'text-black font-bold font-sarabun' }`}>User</span>
              <Switch
                checked={isAdmin}
                onChange={toggleRole}
                className={`${
                  isAdmin ? 'bg-customBtn' : 'bg-gray-300'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
              >
                <span
                  className={`${
                    isAdmin ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                />
              </Switch>
              <span className={`${isAdmin ? 'text-black font-bold font-sarabun' : 'text-gray-600'}`}>Admin</span>
            </div>

            <Tooltip text={isSidebarCollapsed ? "User Menu" : null}>
              <div className="relative z-10"> {/* Added relative positioning and z-index */}
                <UserMenu
                  username="Damilola Odusola"
                  avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
