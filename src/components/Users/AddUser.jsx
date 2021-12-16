import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age</label>
            <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
};

export default AddUser;