import React, { useEffect, useState } from "react";
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

    if (totalPages <= 3) {
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
    } else {
      // Mostra a primeira página
      pageNumbers.push(
        <Styled.PageButton
          key={1}
          active={1 === currentPage}
          onClick={() => handlePageClick(1)}
        >
          1
        </Styled.PageButton>
      );

      // Mostra três pontos se a página atual for maior que 2
      if (currentPage > 2) {
        pageNumbers.push(<span key="dots">...</span>);
      }

      // Mostra páginas próximas à página atual
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
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

      // Mostra três pontos se a página atual for menor que totalPages - 1
      if (currentPage < totalPages - 1) {
        pageNumbers.push(<span key="dots">...</span>);
      }

      // Mostra a última página
      pageNumbers.push(
        <Styled.PageButton
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
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
