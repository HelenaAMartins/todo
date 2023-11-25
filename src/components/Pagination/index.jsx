import { useEffect, useState } from "react";
import * as Styled from "./styled";

const Pagination = ({ totalItems, onPageChange, currentPage }) => {
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;
  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Styled.PageButton
          key={i}
          active={i === currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Styled.PageButton>
      );
    }

    return pageNumbers;
  };

  return (
    <Styled.PaginationContainer>
      {totalPages > 0 && renderPageNumbers()}
    </Styled.PaginationContainer>
  );
};

export default Pagination;
