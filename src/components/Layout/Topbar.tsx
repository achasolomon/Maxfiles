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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </div>
    )}
  </div>
);

const Topbar: React.FC<TopbarProps> = ({
  onSidebarToggle,
  isSidebarCollapsed,
  isMobile
}) => {
  const [isAdmin, setIsAdmin] = useState(true);

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
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Left section - Logo and Menu */}
          <div className="flex items-center  gap-4 min-w-fit">
            <div className="flex items-center">
              {!isSidebarCollapsed || isMobile ? (
                <h2 className={`text-xl font-semibold mr-4 ${isMobile ? '' : '-ml-20'}`}>
                  <span className="text-indigo-400 font-sarabun">Max</span>
                  <span className="text-yellow-500 font-sarabun">Files</span>
                </h2>
              ) : (
                <span className="text-indigo-400 text-xl font-bold mr-4">MF</span>
              )}
              <Tooltip text={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
                <button
                  onClick={onSidebarToggle}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </Tooltip>
            </div>

            {/* InitiateWorkflow moved before search bar for desktop */}
            {!isMobile && (
              <div className="flex items-center">
                <Tooltip text={isSidebarCollapsed ? "Initiate Workflow" : null}>
                  <div className="relative">
                    <InitiateWorkflow />
                  </div>
                </Tooltip>
              </div>
            )}
          </div>

          {/* Center section - Search Bar */}
          <div className={`flex-1 ${isMobile ? 'max-w-full' : 'max-w-2xl'}`}>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4 min-w-fit">
            {!isMobile && (
              <div className="flex items-center gap-4">
                <Tooltip text={isSidebarCollapsed ? "Upload File" : null}>
                  <div>
                    <FileUpload onFileSelect={handleFileUpload} />
                  </div>
                </Tooltip>

                {/* Role Toggle */}
                <div className="flex items-center gap-2">
                  <span className={`${!isAdmin ? 'text-gray-600' : 'text-black font-bold'} font-sarabun text-sm whitespace-nowrap`}>
                    User
                  </span>
                  <Switch
                    checked={isAdmin}
                    onChange={toggleRole}
                    className={`${isAdmin ? 'bg-customBtn' : 'bg-gray-300'
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                  >
                    <span
                      className={`${isAdmin ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                    />
                  </Switch>
                  <span className={`${isAdmin ? 'text-black font-bold' : 'text-gray-600'} font-sarabun text-sm whitespace-nowrap`}>
                    Admin
                  </span>
                </div>
              </div>
            )}

            {/* User Menu - Always visible */}
            <div className="relative">
              <UserMenu
                username="Damilola Odusola"
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;