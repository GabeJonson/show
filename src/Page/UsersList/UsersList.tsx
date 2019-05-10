import React, { useState } from 'react';
import { Button, FormContainer } from 'components';
import { Field } from 'react-final-form';
import { observer } from "mobx-react";

import { Detepicker } from './components/Detepicker';
import styles from './UsersList.module.scss';
import users from './Users.json';

import 'react-dates/lib/css/_datepicker.css';

interface UserDetails {
  userName: string;
  userBirth: string;
}

export const UsersList: React.FC = () => {
  const [nameError, handleNameError] = useState(false);

  const createUser = (value: UserDetails) => {
    console.log(value, ' <<< submit value');
  };

  const validateUser = (value: UserDetails) => {
    if (!value.userName.match(/[a-zA-Zа-яА-Я]/)) {
      return Promise.reject(new Error()).catch(() => handleNameError(true));
    }

    return Promise.resolve<UserDetails>(value);
  };

  return (
    <section className={styles.usersContainer}>
      <h1 className={styles.containerHead}>Birthdays list</h1>

      <FormContainer
        onSubmit={createUser}
        validate={validateUser}
        initial={{
          userName: '',
          userBirth: '',
        }}
        className={styles.formContainer}
      >
        <Field
          name="userName"
          component="input"
          placeholder="Enter a name"
          className={styles.input}
        />
        <Field name="userBirth" render={() => <Detepicker />} />
        <Button type="submit" className={styles.submitButton}>
          Create
        </Button>
      </FormContainer>

      <section className={styles.list}>
        {users.map(user => (
          <div className={styles.userData} key={user.userBirth + user.userName}>
            <p className={styles.userName}>{user.userName}</p>
            <div className={styles.birthWithSave}>
              <p className={styles.userBirth}>{user.userBirth}</p>
              <Button type="button" className={styles.saveButton}>
                Save
              </Button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
