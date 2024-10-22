import React from 'react';
import Table from '../commons/Table';

interface CheckedOutDocument {
  id: string;
  name: string;
  checkedOutBy: string;
  checkedOutAt: string;
}

const RecentlyCheckedOut: React.FC = () => {
  const documents: CheckedOutDocument[] = [
    { id: '1', name: 'Document 1', checkedOutBy: 'John Doe', checkedOutAt: '2023-10-21 14:30' },
    { id: '2', name: 'Document 2', checkedOutBy: 'Jane Smith', checkedOutAt: '2023-10-20 09:15' },
    { id: '3', name: 'Document 3', checkedOutBy: 'Glory Idang', checkedOutAt: '2023-10-19 11:20' },
    { id: '4', name: 'Document 4', checkedOutBy: 'Joe Sol', checkedOutAt: '2023-10-18 10:30' },
    { id: '5', name: 'Document 5', checkedOutBy: 'Vincent Kalu', checkedOutAt: '2023-10-14 09:30' },
    { id: '6', name: 'Document 6', checkedOutBy: 'Glory Idang', checkedOutAt: '2023-10-12 11:20' },
    { id: '7', name: 'Document 7', checkedOutBy: 'John Doe', checkedOutAt: '2023-10-10 14:30' },
    // Add more mock data as needed
  ];

  const columns = [
    { header: 'Name', accessor: 'name' as keyof CheckedOutDocument },
    { header: 'Checked Out By', accessor: 'checkedOutBy' as keyof CheckedOutDocument },
    { header: 'Checked Out At', accessor: 'checkedOutAt' as keyof CheckedOutDocument },
  ];

  return (
    <div className="bg-white shadow-sm p-4 border border-gray-300 font-sarabun">
      <h2 className="text-xl font-semibold mb-4">Recently Checked Out</h2>
      <Table 
        columns={columns} 
        data={documents} 
        itemsPerPage={4} // Display only 4 items per page
        onRowClick={(item) => console.log('Clicked:', item)} 
      />
    </div>
  );
};

export default RecentlyCheckedOut;
