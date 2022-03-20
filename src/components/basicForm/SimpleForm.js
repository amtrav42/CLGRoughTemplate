import { useState } from "react";
import Button from "../button/Button";
import styles from "./SimpleForm.module.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsValid(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredName("");
    setEnteredNameIsValid(true);
  };

  const formStyles = enteredNameIsValid
    ? `${styles["form-control"]}`
    : `${styles["form-control"]} ${styles["invalid"]}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      {!enteredNameIsValid && (
        <p className={styles["error-text"]}>Name must not be empty.</p>
      )}
      <div className={styles["form-actions"]}>
        <Button>Submit Name</Button>
      </div>
    </form>
  );
};

export default SimpleInput;
