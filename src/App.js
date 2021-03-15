import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './components/Users';
import Pagination from './components/Pagination'
import Header from './components/Header'
import Input from './components/Input'


const App = () => {

  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(25);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://randomuser.me/api/?results=200'
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

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  console.log(users);
  console.log(infos);
  return (
    <div className="">
      <Header />
      <div className="container">
        <Input />
      <Users users={currentUsers} infos={infos} loading={loading} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
    </div>
    </div>
    
  );
};

export default App;
