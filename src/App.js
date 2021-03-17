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
      const response = await axios.get("https://randomuser.me/api/?results=50");

      setUsers(response.data.results);
      setLoading(false);
      setInfos(response.data.info);
    };

    fetchUsers();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setInfos(
  //       Object.keys(infos).filter((user) =>
  //         user.seed.toLowerCase().includes(text.toLowerCase())
  //       )
  //     );
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [text, infos]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(
        users.filter((user) =>
          user.name.first.toLowerCase().includes(text.toLowerCase())
        )
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [text, users])



  // useEffect(() => {
  //   const filteredInfos = Object.entries(infos);

  //   // setFilteredUsers(
  //   //   users.filter((user) =>
  //   //     user.name.first.toLowerCase().includes(text.toLowerCase())
  //   //   )
  //   // filteredInfos[0][1].toLowerCase().includes(text.toLowerCase())
  //   console.log('fileteredinfos',filteredInfos[0])

  // }, [text, infos]);

  //Here we are getting current users
  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  console.log("users", users);
  console.log("infos", infos);

  return (
    <div className="">
      <Header />
      <div className="container">
        <Input text={text} setText={setText} />
        <Users
          infos={infos}
          loading={loading}
          users={currentUsers}
          
        />
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
};

export default App;
