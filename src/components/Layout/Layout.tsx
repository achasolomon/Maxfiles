import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false); // Changed default to false
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Set collapsed to true only on mobile
      setIsCollapsed(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = (): void => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleOverlayClick = (): void => {
    setIsMobileOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar 
        isCollapsed={isCollapsed} 
        isMobile={isMobile}
        isMobileOpen={isMobileOpen}
        onSidebarToggle={toggleSidebar}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar
          onSidebarToggle={toggleSidebar}
          isSidebarCollapsed={isCollapsed}
          isMobile={isMobile}
        />

        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden"
            onClick={handleOverlayClick}
          />
        )}

        <main className={`
          flex-1 overflow-y-auto
          pt-16 pb-6 px-4
          transition-all duration-300 ease-in-out
          ${!isMobile && (isCollapsed ? 'md:ml-16' : 'md:ml-64')}
        `}>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;