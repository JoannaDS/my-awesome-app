import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './components/users';

const App = () => {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [infos, setInfos] = useState({});
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [usersPerPage, setUsersPerPage] = useState(25);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://randomuser.me/api/?results=500'
      );
      setUsers(response.data.results);
      setLoading(false);
      setInfos(response.data.info);
    };

    fetchUsers();
  }, []);

  //Here we are getting current users
  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

  console.log(users);
  console.log(infos);
  return (
    <div className="container">
      <h1>My awsome App</h1>
      <Users users={currentUsers} infos={infos} loading={loading} />
    </div>
  );
};

export default App;
