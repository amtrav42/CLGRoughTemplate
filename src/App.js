import React, { useCallback, useEffect, useState } from "react";

import BooksList from "./components/BooksList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooksHandler = useCallback(async () => {
    const response = await fetch(
      "https://openlibrary.org/authors/OL23919A/works.json?limit=10"
    );

    const data = await response.json();

    const transformedBooks = data.entries.map((bookData, index) => {
      return {
        key: bookData.key,
        name: bookData.title,
      };
    });
    setBooks(transformedBooks);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>No books found</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
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
