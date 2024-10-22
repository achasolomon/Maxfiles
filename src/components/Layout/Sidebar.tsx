import React, { useState } from 'react';
import { HomeIcon, FolderIcon, StarIcon, UserIcon, DocumentCheckIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
}

interface MenuItem {
  name: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
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

  return (
    <div
      className={`
        ${isCollapsed ? 'w-16' : 'w-56'}
        bg-gray-800 h-screen transition-all duration-700 ease-in-out
        flex flex-col items-center justify-start
      `}
    >
      <div className="flex items-center justify-center bg-white border-r-2 border-gray relative h-18 w-full">
        {!isCollapsed ? (
          <h2 className="text-white text-4xl font-semibold">
            <span className="text-indigo-400 font-sarabun">Max</span>
            <span className="text-yellow-500 font-sarabun">Files</span>
          </h2>
        ) : (
          <span className="text-[#333547] text-xl font-semibold">MF</span>
        )}
      </div>

      <nav className="mt-5 w-full px-2 font-sarabun">
        <div className="space-y-1 w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <div key={item.name} className="relative group w-full">
                <Link
                  to="#"
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    ${isActive ? 'bg-[#3e444d] text-[#b4c9de]' : 'text-gray-300 hover:text-[#b4c9de]'}
                    group flex items-center px-2 py-3 rounded-md transition-all duration-500
                  `}
                >
                  <Icon
                    className={`
                      transform transition-transform duration-500 ease-in-out 
                      ${isActive ? 'scale-110' : 'scale-100'}
                      h-6 w-6 ${item.color} ${isCollapsed ? 'mx-auto' : 'mr-3'}
                      group-hover:text-[#b4c9de]
                    `}
                  />
                  <span
                    className={`
                      ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
                      transition-all duration-700 ease-in-out
                      text-sm font-sarabun whitespace-nowrap
                    `}
                  >
                    {item.name}
                  </span>
                </Link>

                {/* Tooltip: Display only when sidebar is collapsed */}
                {isCollapsed && (
                  <div
                    className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-800 text-white text-base shadow-lg min-w-max z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
