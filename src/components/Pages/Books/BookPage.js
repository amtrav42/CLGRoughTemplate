import React, { useCallback, useContext, useState } from "react";

import BooksList from "./BooksList";
import LoadingSpinner from "./LoadingSpinner";
import Button from "../../Button/BasicButton";
import classes from "./Book.module.css";

import { ThemeContext } from "../../../store/theme-context";

const BookPage = () => {
  const theme = useContext(ThemeContext);

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const searchTextChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    console.log(searchText);
    try {
      const response = await fetch(
        // "https://openlibrary.org/authors/OL23919A/works.json?limit=10"
        `http://openlibrary.org/search.json?author=${searchText}`
      );

      console.log(response);

      if (response.status === 404) {
        setError(true);
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const transformedBooks = data.docs.map((bookData, index) => {
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
  }, [searchText]);

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
        <input
          className={classes["search-input"]}
          type="text"
          value={searchText}
          onChange={searchTextChangeHandler}
        />
        <Button
          onClick={fetchBooksHandler}
          className={`${classes["search-button"]} ${
            theme.darkMode ? "bg-dark" : "bg-light"
          }`}
          // title="Search for J.K Rowling's work"
          title="Search for Authors work"
        ></Button>
        <section>{content}</section>
      </section>
    </React.Fragment>
  );
};

export default BookPage;
