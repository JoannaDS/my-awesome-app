import React from "react";

const Users = ({ fileteredUsers, loading, infos}) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="container">
     <div className="row d-flex">
      {fileteredUsers.map((user,i) => (
        <div key={i} className="card-deck card-container text-center mb-4 py-3">
          <div className="card card-details">
            <img
              className="p-3 picture"
              src={user.picture.medium}
              alt={user.name.first}
            />
            <p>
              {" "}
              {user.name.title} {user.name.first} {user.name.last}
            </p>
            <p> {user.location.country}</p>
            <p>{infos.seed}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Users;
