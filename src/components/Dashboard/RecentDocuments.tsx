import React from 'react';
import Table from '../commons/Table';

interface Document {
  id: string;
  name: string;
  workflow: string;
  stage: string;
  updatedAt: string;
}

const RecentDocuments: React.FC = () => {
  const documents: Document[] = [
    { 
      id: '1', 
      name: 'Document 1', 
      workflow: 'Review', 
      stage: 'In Progress', 
      updatedAt: '2023-10-21' 
    },
    { 
      id: '2', 
      name: 'Document 2', 
      workflow: 'Approve', 
      stage: 'Pending', 
      updatedAt: '2023-10-20' 
    },
    { 
      id: '3', 
      name: 'Document 3', 
      workflow: 'Approve', 
      stage: 'Finished', 
      updatedAt: '2023-10-19' 
    },
    { 
      id: '4', 
      name: 'Document 4', 
      workflow: 'Approve', 
      stage: 'Pending', 
      updatedAt: '2023-10-18' 
    },
    { 
      id: '5', 
      name: 'Document 5', 
      workflow: 'Review', 
      stage: 'Pending', 
      updatedAt: '2023-10-16' 
    },
    { 
      id: '6', 
      name: 'Document 6', 
      workflow: 'Approve', 
      stage: 'Finished', 
      updatedAt: '2023-10-19' 
    },
    {
      id: '7', 
      name: 'Document 7', 
      workflow: 'Review', 
      stage: 'In Progress', 
      updatedAt: '2023-10-21' 
    },
    {
      id: '8', 
      name: 'Theft', 
      workflow: 'Rentenced', 
      stage: 'Finished', 
      updatedAt: '2023-10-21' 
    },
    { 
      id: '9', 
      name: 'Marriage', 
      workflow: 'Married', 
      stage: 'finished', 
      updatedAt: '2023-10-18' 
    },
  ];

  const columns = [
    { 
      header: 'Name', 
      accessor: 'name' as keyof Document,
      width: '30%',
      truncate: true
    },
    { 
      header: 'Workflow', 
      accessor: 'workflow' as keyof Document,
      width: '30%',
      truncate: true
    },
    { 
      header: 'Stage', 
      accessor: 'stage' as keyof Document,
      width: '20%',
      truncate: true
    },
    { 
      header: 'Updated At', 
      accessor: 'updatedAt' as keyof Document,
      width: '20%',
      truncate: true
    },
  ];

  return (
    <div className="bg-white shadow-sm p-4 border border-gray-300 font-sarabun">
      <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
      <Table 
        columns={columns} 
        data={documents}
        itemsPerPage={4} // Set to show 4 items per page
        onRowClick={(item) => console.log('Clicked:', item)} 
      />
    </div>
  );
};

export default RecentDocuments;