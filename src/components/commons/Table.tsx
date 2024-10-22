import React, { useState } from 'react';
import Pagination from './Pagination';
import Button from '../ui/Button';

interface Column<T> {
  header: string;
  accessor: keyof T;
  Cell?: (props: { value: any }) => JSX.Element;
  width?: string;  
  truncate?: boolean; 
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  itemsPerPage?: number;
}

function Table<T extends { id: string | number }>({ 
  columns, 
  data, 
  onRowClick, 
  itemsPerPage = 10 
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className={`px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                        column.width ? '' : 'w-auto'
                      }`}
                      style={column.width ? { width: column.width } : {}}
                    >
                      <span className="truncate">{column.header}</span>
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-2 w-20">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    onClick={() => onRowClick && onRowClick(item)} 
                    className={`hover:bg-gray-100 cursor-pointer ${index % 2 === 0 ? 'bg-[#ECECF1]' : 'bg-white'}`}
                  >
                    {columns.map((column, index) => (
                      <td 
                        key={index} 
                        className={`px-6 py-4 ${column.truncate !== false ? 'whitespace-nowrap' : ''}`}
                      >
                        <div className={`text-sm text-gray-900 ${
                          column.truncate !== false 
                            ? 'truncate' 
                            : ''
                        }`}>
                          {column.Cell ? (
                            <column.Cell value={item[column.accessor]} />
                          ) : (
                            String(item[column.accessor])
                          )}
                        </div>
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button 
                        onClick={() => console.log('View clicked for:', item)} 
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default Table;
