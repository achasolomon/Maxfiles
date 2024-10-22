import React from 'react';
import Table from '../commons/Table';

interface UploadedDocument {
  id: string;
  name: string;
  uploadedBy: string;
  uploadedAt: string;
}

const RecentlyUploaded: React.FC = () => {
  const documents: UploadedDocument[] = [
    { id: '1', name: 'Document 1', uploadedBy: 'John Doe', uploadedAt: '2023-10-21 15:45' },
    { id: '2', name: 'Document 2', uploadedBy: 'Jane Smith', uploadedAt: '2023-10-20 11:30' },
    { id: '3', name: 'Document 3', uploadedBy: 'Glory Idan', uploadedAt: '2023-10-19 11:20' },
    { id: '4', name: 'Document 4', uploadedBy: 'Vincent Kalu', uploadedAt: '2023-10-18 10:30' },
    { id: '5', name: 'Document 5', uploadedBy: 'Joe Sol', uploadedAt: '2023-10-14 09:30' },
    { id: '6', name: 'Document 6', uploadedBy: 'Jane Smith', uploadedAt: '2023-10-20 11:30' },
    { id: '7', name: 'Document 7', uploadedBy: 'Vincent Kalu', uploadedAt: '2023-10-18 10:30' },

    // Add more mock data as needed
  ];

  const columns = [
    { header: 'Name', accessor: 'name' as keyof UploadedDocument },
    { header: 'Uploaded By', accessor: 'uploadedBy' as keyof UploadedDocument },
    { header: 'Uploaded At', accessor: 'uploadedAt' as keyof UploadedDocument },
  ];

  return (
    <div className="bg-white shadow-sm p-4 border border-gray-300 font-sarabun">
      <h2 className="text-xl font-semibold mb-4">Recently Uploaded</h2>
      <Table 
        columns={columns} 
        data={documents} 
        itemsPerPage={4} // Display only 4 items per page
        onRowClick={(item) => console.log('Clicked:', item)} 
      />
    </div>
  );
};

export default RecentlyUploaded;
