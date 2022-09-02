import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const refUsername = useRef()
  const refAge = useRef()
  const [error, setError] = useState('');

  const hideModal = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (refUsername.current.value.trim().length === 0 || refAge.current.value.trim().length === 0) {
      setError({header:'Ooops !',message:'You need to fill both inputs'});
      return;
    }

    if (+refAge.current.value < 1) {
      setError({header:'Ooops !',message:"Age can't be inferior to 1"});
      return;
    }

    props.onAddUser(refUsername.current.value, refAge.current.value);

    refUsername.current.value = '';
    refAge.current.value = '';
  };


  return (
    <React.Fragment>
      {error &&<ErrorModal header={error.header} message={error.message} onClick={hideModal}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={refUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={refAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
