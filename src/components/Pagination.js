import React from 'react';

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination__style">
      <ul className="pagination justify-content-end">
        <li className="page-item ">
          <a
            className="page-link"
            href="#!"
            onClick={(e) => {
              firstPage();
              e.preventDefault();
            }}
          >
            {'<<'}
          </a>
        </li>
        <li className="page-item ">
          <a
            className="page-link"
            href="#!"
            onClick={(e) => {
              prevPage();
              e.preventDefault();
            }}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <div>
            <li key={number.id} className="page-item">
              <a
                href="!#"
                onClick={(e) => {
                  paginate(number);
                  e.preventDefault();
                }}
                className="page-link pagination__style"
              >
                {number}
              </a>
            </li>
          </div>
        ))}
        <li className="page-item ">
          <a
            className="page-link"
            href="#!"
            onClick={(e) => {
              nextPage();
              e.preventDefault();
            }}
          >
            Next
          </a>
        </li>
        <li className="page-item ">
          <a
            className="page-link"
            href="#!"
            onClick={(e) => {
              lastPage();
              e.preventDefault();
            }}
          >
            {'>>'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
