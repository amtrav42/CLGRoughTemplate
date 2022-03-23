import React, { useCallback, useEffect, useState } from "react";

import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://codelikeagirl-a45bc-default-rtdb.firebaseio.com/books.json"
        // "https://openlibrary.org/authors/OL23919A/works.json?limit=10"
      );

      if (response.status === 404) {
        console.log("Hello", response);
        setError(true);
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(response);

      const loadedBooks = [];

      for (const key in data) {
        loadedBooks.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
        });
      }
      setBooks(loadedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  const addBookHandler = async (book) => {
    console.log(book);
    const response = await fetch(
      "https://codelikeagirl-a45bc-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  let content = <p>No books found</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddBook onAddBook={addBookHandler} />
      </section>
      <section>
        <button onClick={fetchBooksHandler}>
          Search for books
        </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
