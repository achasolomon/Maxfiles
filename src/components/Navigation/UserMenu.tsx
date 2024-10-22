import React, { useState } from 'react';
import { UserIcon, CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

interface UserMenuProps {
  username: string;
  avatarUrl: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ username, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <img className="h-8 w-8 rounded-full" src={avatarUrl} alt={username} />
        <span className="ml-2 text-gray-700">{username}</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <UserIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Your Profile
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <CogIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Settings
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;