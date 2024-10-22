import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full flex justify-end mt-2">
      <div className="inline-flex items-center border border-borderColor">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 text-sm border-r border-borderColor ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          Previous
        </button>

        {pageNumbers.map((number, index) => (
          <React.Fragment key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1.5 text-sm ${
                currentPage === number
                  ? 'bg-blue-600 text-white'
                  : 'text-blue-600 hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
            {index < pageNumbers.length - 1 && (
              <div className="w-px h-full bg-gray-200" />
            )}
          </React.Fragment>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 text-sm border-l border-gray-200 ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;