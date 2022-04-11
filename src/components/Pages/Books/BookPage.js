import React, { useCallback, useEffect, useState } from "react";

import BooksList from "./BooksList";
import LoadingSpinner from "./LoadingSpinner";
import Button from "../../Button/BasicButton";
import classes from "./Book.module.css";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("Anything");

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://openlibrary.org/authors/OL23919A/works.json?limit=10"
      );

      if (response.status === 404) {
        console.log("Hello", response);
        setError(true);
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(response);

      const transformedBooks = data.entries.map((bookData, index) => {
        console.log("bookData", bookData);
        return {
          key: bookData.key,
          name: bookData.title,
        };
      });
      setBooks(transformedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>No books found</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <section className={classes["container"]}>
        <Button
          onClick={fetchBooksHandler}
          className={classes["search-button"]}
          title="Search for J.K Rowling's work"
        ></Button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default BookPage;
