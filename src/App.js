import { useEffect, useState } from "react";
import axios from "axios";
import User from "./components/User";
// import Pagination from './components/Pagination'
import Header from "./components/Header";
// import Input from "./components/Input";

const App = () => {
  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState({});
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(25);
  const [text, setText] = useState("");

  const [fileteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://randomuser.me/api/?page=5&results=25&inc=name,picture,location"
      );

      setUsers(response.data.results);
      setLoading(false);
      setInfos(response.data.info);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.first.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text, users]);

  useEffect(() => {
    const filteredInfos = Object.entries(infos)
    // setFilteredUsers(
    //   users.filter((user) =>
    //     user.name.first.toLowerCase().includes(text.toLowerCase())
    //   )
    
    console.log(filteredInfos[0])
    
  }, [text, infos]);

  // //Here we are getting current users
  // const indexOfLastUsers = currentPage * usersPerPage;
  // const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  // const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

  // //Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // console.log(users);
  // console.log(infos);

  return (
    <div className="">
      <Header />
      <div className="container">
        <p>{text}</p>

        <input
          className="searchUser__input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search by seed"
        ></input>

        <User
          infos={infos}
          loading={loading}
          fileteredUsers={fileteredUsers}
        />
        {/* <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} /> */}
        {/* <Input text={text} /> */}
      </div>
    </div>
  );
};

export default App;
