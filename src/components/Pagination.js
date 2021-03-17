import React from "react";

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination__style">
      <ul className="pagination justify-content-end">
        <li className="page-item ">
          <a className="page-link" href="#!" onClick={() => prevPage()}>
            Previous
          </a>
        </li>

        {pageNumbers.map((number) => (
          <div>
            <li key={number.id} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          </div>
        ))}
        <li className="page-item ">
          <a className="page-link" href="#!" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
