import React, {useState} from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || +userAge < 1) {
      return
    }
    let user = {
      name : userName,
      age : userAge
    }

    console.log(user);
    setUserName('');
    setUserAge('');
  }


  return (
    <Card className={styles["input"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username"> Nom :</label>
        <input id="userName" type="text" value={userName} onChange={userNameHandler} />
        <label htmlFor="userAge"> Age : </label>
        <input id="userAge" type="number" value={userAge} onChange={userAgeHandler} />
        <Button type="submit">Ajouter</Button>
      </form>
    </Card>
  );
};

export default AddUser;
