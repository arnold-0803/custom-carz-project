import React from 'react';
import "./PagesPaginationStyles.css";

function CustomPagination({currentPage, setCurrentPage, totalPages}) {

  const handlePrevious = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const pageNumbers = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className="pagination-wrapper">
      <button
        className='prev-btn'
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <i className='fa-solid fa-chevron-left'></i>
      </button>
      <div>
        {pageNumbers.map(number => (
          <button 
            className='number-btn'
            key={number}
            onClick={() => handlePageClick(number)}
            disabled={number === currentPage}
          >
            {number}
          </button>
        ))}
      </div>
      <button
      className='next-btn'
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <i className='fa-solid fa-chevron-right'></i>
      </button>
    </div>
  )
}

export default CustomPagination;
