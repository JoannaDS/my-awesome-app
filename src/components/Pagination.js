  
import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-end'>
      <li class="page-item ">
   
    </li>
        {pageNumbers.map(number => (
            <div>
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
          </div>
        ))}
        
      </ul>
    </nav>
  );
};

export default Pagination;