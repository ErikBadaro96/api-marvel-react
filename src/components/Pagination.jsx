import React from "react";

const Paginate = ({ postPerPage, totalPosts, paginate, nextPage, previousPage }) => {
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <footer>
      <ul className="pagination">
        <li className="page-item">
          <button onClick={() => previousPage(previousPage)} className="arrow-link" >
            <span aria-hidden="true">«</span>
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li className="page-item">
            <button id={`page-number-${number}`} onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button onClick={() => nextPage()} className="arrow-link">
            <span aria-hidden="true">»</span>
          </button>
        </li>
      </ul>
    </footer>
  );
};
export default Paginate;
