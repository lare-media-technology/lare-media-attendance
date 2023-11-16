import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number, pageToken: string | null | undefined) => void;
  pageToken: string | null | undefined;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, pageToken }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <HStack spacing={2}>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          colorScheme={pageNumber === currentPage ? 'blue' : 'gray'}
          onClick={() => onPageChange(pageNumber, pageToken)}
        >
          {pageNumber}
        </Button>
      ))}
    </HStack>
  );
};


export default Pagination;
