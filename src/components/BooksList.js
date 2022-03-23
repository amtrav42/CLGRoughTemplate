import React from "react";

import Book from "./Book";
import classes from "./Book.module.css";

const BooksList = (props) => {
  if (props.books.length === 0) {
    return null;
  }

  return (
    <section>
      <ul className={classes["books-list"]}>
        {props.books.map((book) => (
          <Book key={book.key} name={book.title} />
        ))}
      </ul>
    </section>
  );
};

export default BooksList;
