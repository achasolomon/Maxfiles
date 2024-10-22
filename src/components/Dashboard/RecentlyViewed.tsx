import React from 'react';
import Table from '../commons/Table';

interface ViewedDocument {
  id: string;
  name: string;
  uploadedAt: string;
}

const RecentlyViewed: React.FC = () => {
  const documents: ViewedDocument[] = [
    { id: '1', name: 'Document 1', uploadedAt: '2023-10-21' },
    { id: '2', name: 'Document 2', uploadedAt: '2023-10-20' },
    { id: '3', name: 'Document 3', uploadedAt: '2023-10-19' },
    { id: '4', name: 'Document 4', uploadedAt: '2023-10-18' },
    { id: '5', name: 'Document 5', uploadedAt: '2023-10-12' },
    { id: '6', name: 'Document 6', uploadedAt: '2023-10-20' },
    { id: '7', name: 'Document 7', uploadedAt: '2023-10-18' },
    // Add more mock data as needed
  ];

  const columns = [
    { header: 'Name', accessor: 'name' as keyof ViewedDocument },
    { header: 'Uploaded At', accessor: 'uploadedAt' as keyof ViewedDocument },
  ];

  return (
    <div className="bg-white shadow-sm p-4 border border-gray-300 font-sarabun">
      <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
      <Table 
        columns={columns} 
        data={documents} 
        itemsPerPage={4} // Display only 4 items per page
        onRowClick={(item) => console.log('Clicked:', item)} 
      />
    </div>
  );
};

export default RecentlyViewed;
