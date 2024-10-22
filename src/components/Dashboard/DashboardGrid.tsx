import React from 'react';
import RecentDocuments from './RecentDocuments';
import RecentlyViewed from './RecentlyViewed';
import RecentlyCheckedOut from './RecentlyCheckedOut';
import RecentlyUploaded from './RecentlyUploaded';

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RecentDocuments />
      <RecentlyViewed />
      <RecentlyCheckedOut />
      <RecentlyUploaded />
    </div>
  );
};

export default DashboardGrid;