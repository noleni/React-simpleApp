import React, {useState} from 'react';
import styles from './AddUser.module.css'

const AddUser = (props) => {

  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let user = {
      name : userName,
      age : userAge
    }
    console.log(user);
  }


  return (
    <form onSubmit={submitHandler} className={styles['user-form']}>
      <div>
        <label htmlFor='username'> Nom :</label>
        <input id='userName' type='text' onChange={userNameHandler} />
        <label htmlFor='userAge'> Age : </label>
        <input id='userAge' type='number' onChange={userAgeHandler}/>
      </div>
      <div>
        <button type='submit'>Ajouter</button>
      </div>
    </form>
  )
};

export default AddUser;
