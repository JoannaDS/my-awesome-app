import React from 'react';

const Users = ({ fileteredUsers, loading, infos, users }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="container d-flex">
      <div className="d-flex row d-flex justify-content-between">
        {users.map((user) => (
          <div className="card-deck card-container text-center mb-4 py-3">
            <div className="card card-details">
              <img className="p-3 picture" src={user.picture.medium} alt={user.name.first} />
              <p> {user.name.title} {user.name.first} {user.name.last}</p>
              <p> {user.location.country}</p>
              {/* <p> {user.name.last}</p> */}
              <p>{infos.seed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
