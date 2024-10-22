import { useState, useEffect } from 'react';

interface TableData {
  id: string;
  [key: string]: any;
}

const useTableData = (initialData: TableData[], itemsPerPage: number = 10) => {
  const [data, setData] = useState<TableData[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return {
    data: getCurrentPageData(),
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
  };
};

export default useTableData;