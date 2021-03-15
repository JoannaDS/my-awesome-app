import { useEffect, useState} from 'react';
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
  const [text,setText]= useState('')
  const [text2,setText2]= useState('');

  const [fileteredUsers, setFilteredUsers]=useState([])

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

  useEffect(()=>{
    setFilteredUsers(
      users.filter((user)=> user.name.first.toLowerCase().includes(text.toLowerCase()))
    )

  }, [text, users])

  //Here we are getting current users
  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  console.log(users);
  console.log(infos);
  console.log(text2)


  return (
    <div className="">
      <Header />
      <div className="container">
        <p>{text}</p>
        <p>{text2}</p>

        <input className="searchUser__input" value={text} onChange={(e)=> setText(e.target.value)}  placeholder="Search by seed" ></input>
          
        {/* {fileteredUsers.map((user, index) => (
        <Users2 key={index} {...user} />
      ))} */}
  {/* bylo  users={currentUsers} */}
     <Users infos={infos} loading={loading} fileteredUsers={fileteredUsers} users={currentUsers} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
      <Input text2={text2} />
    </div>
    </div>
    
  );
};

// const Users2 = (props) => {
//   const {name} =props

//   return (
//    <div>
 
//               <p> {name.title}</p>
//               <p> {name.first}</p>
//               <p> {name.last}</p>
            
//               </div>
//   )

// }


export default App;
