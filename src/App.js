import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App(props) {

  const [usersList, setUsersList] = useState([]);
  // const [usersList, setUsersList] = useState([]);

  const addUserToUsersList = (dataName, dataAge) => {
    setUsersList(prevList => [...prevList, {id:usersList.length+1, name:dataName, age:dataAge }])
    console.log(usersList)
  };


  return (
    <div>
      <AddUser onAddUser={addUserToUsersList }/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;



// function App() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prevUsersList) => {
//       return [
//         ...prevUsersList,
//         { name: uName, age: uAge, id: Math.random().toString() },
//       ];
//     });
//   };

//   return (
//     <div>
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//     </div>
//   );
// }
