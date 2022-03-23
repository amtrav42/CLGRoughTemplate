import React, { useCallback, useEffect, useState } from "react";

import BooksList from "./components/BooksList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
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

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchBooksHandler}>
          Search for J.K Rowling's work
        </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
