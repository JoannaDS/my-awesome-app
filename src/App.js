import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(25);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://randomuser.me/api/?results=100&seed=${text}`
      );

      setUsers(response.data.results);
      setLoading(false);
      setInfos(response.data.info);
    };

    fetchUsers();
  }, [text]);

  //Here we are getting current users
  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);
  const maxPage = Math.ceil(users.length / usersPerPage);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  const prevPage = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(users.length / usersPerPage);

  console.log("users", users);
  console.log("infos", infos);

  return (
    <div className="">
      <Header />
      <div className="container">
        <Input text={text} setText={setText} />
        <Users infos={infos} loading={loading} users={currentUsers} />
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </div>
    </div>
  );
};

export default App;
