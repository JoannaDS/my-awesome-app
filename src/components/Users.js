import React from "react";

const Users = ({ users, loading, infos }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="container mt-5">
      <div className="row d-flex">
        {users.map((user) => (
          <div
            key={user.login.uuid}
            className="card-deck card-container text-center mb-4 py-3"
          >
            <div className="card card-details">
              <img
                className="p-3 picture"
                src={user.picture.medium}
                alt={user.name.first}
              />
              <h3 className="pt-3">
                {user.name.title} {user.name.first} {user.name.last}
              </h3>
              <p> {user.location.country}</p>
              {/* <p>{infos.seed}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
