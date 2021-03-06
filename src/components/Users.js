import React from "react";

const Users = ({ users, loading, infos }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="d-flex flex-wrap my-5 mx-n3 ">
      {users.map((user) => (
        <div key={user.login.uuid} className="card-wrapper text-center p-3">
          <div className="card card-details p-3">
            <img
              className="pb-3 picture"
              src={user.picture.medium}
              alt={user.name.first}
            />
            <h3 className="pt-3">
              {user.name.title} {user.name.first} {user.name.last}
            </h3>
            <p className="mt-auto mb-0"> {user.location.country}</p>
            {/* <p>{infos.seed}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
