import React, { useRef } from "react";

import classes from "./AddBook.module.css";

function AddBook(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const Book = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
    };

    props.onAddBook(Book);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;
