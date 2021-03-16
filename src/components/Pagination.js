import React from "react";

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  nextPage,
  prevPage,
  seed,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <nav>
      <ul className="pagination justify-content-end">
        <li className="page-item ">
         <a className="page-link" href="#!" onClick={() => prevPage()}>Previous</a>
        </li>

        {pageNumbers.map((number,index) => (
         <div>
            <li key={index} className="page-item">
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
           <li class="page-item ">
           <a className="page-link" href="#!" onClick={() => nextPage()}>Next</a>
            </li>
      </ul>
      </nav>
  );
};

export default Pagination;
