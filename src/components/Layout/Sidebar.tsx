import React, { useState } from 'react';
import { HomeIcon, FolderIcon, StarIcon, UserIcon, DocumentCheckIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
  isMobile: boolean;
  isMobileOpen: boolean;
  onSidebarToggle?: () => void;
}

interface MenuItem {
  name: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed, 
  isMobile,
  isMobileOpen, 
  onSidebarToggle 
}) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: HomeIcon, color: 'text-blue-500' },
    { name: 'Document Collection', icon: FolderIcon, color: 'text-yellow-500' },
    { name: 'Favorite Files', icon: StarIcon, color: 'text-amber-500' },
    { name: 'Assigned to Me', icon: UserIcon, color: 'text-purple-500' },
    { name: 'Checked Out', icon: DocumentCheckIcon, color: 'text-green-500' },
    { name: 'Unindexed Files', icon: DocumentIcon, color: 'text-gray-500' },
  ];

  const sidebarClasses = `
    fixed top-0 left-0 h-screen
    ${isMobile 
      ? `${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
      : `${isCollapsed ? 'w-16' : 'w-64'} translate-x-0`
    }
    bg-gray-800 transition-all duration-300 ease-in-out
    flex flex-col z-30
  `;

  return (
    <div className={sidebarClasses}>
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-900">
        {(!isCollapsed || isMobile) ? (
          <h2 className="text-2xl font-semibold">
            <span className="text-indigo-400 font-sarabun">Max</span>
            <span className="text-yellow-500 font-sarabun">Files</span>
          </h2>
        ) : (
          <span className="text-indigo-400 text-xl font-bold">MF</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <div key={item.name} className="relative group mb-1">
              <Link
                to="#"
                onClick={() => setActiveItem(item.name)}
                className={`
                  flex items-center px-2 py-2 rounded-md
                  ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300  hover:text-gray-500'}
                  transition-all duration-200
                `}
              >
                <Icon className={`
                  h-6 w-6 
                  ${isActive ? 'text-white' : item.color}
                  ${isCollapsed && !isMobile ? 'mx-auto' : 'mr-3'}
                `} />
                
                <span className={`
                  text-sm font-medium
                  ${isCollapsed && !isMobile ? 'hidden' : 'block'}
                `}>
                  {item.name}
                </span>
              </Link>

              {/* Tooltip */}
              {isCollapsed && !isMobile && (
                <div className="
                  absolute left-full ml-2 px-2 py-1
                  bg-gray-900 text-white text-sm rounded
                  opacity-0 group-hover:opacity-100
                  pointer-events-none transition-opacity
                  whitespace-nowrap z-50
                ">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;