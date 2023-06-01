import { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(); // Initially 'error' is undefined

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length > 0 && age.trim().length > 0 && +age > 0) {
      props.onAddUser(username, age);
      setUsername("");
      setAge("");
    } else if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (must be greater than 0).",
      });
    }
  };

  const updateUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const updateAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            autoFocus
            value={username}
            onChange={updateUsernameHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={updateAgeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
