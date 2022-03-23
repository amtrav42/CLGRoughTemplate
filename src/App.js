import React, { useState } from "react";

import BooksList from "./components/BooksList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  function fetchBooksHandler() {
    fetch("https://openlibrary.org/authors/OL23919A/works.json?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        const transformedBooks = data.entries.map((bookData, index) => {
          console.log("bookData", bookData);
          return {
            key: bookData.key,
            name: bookData.title,
          };
        });
        setBooks(transformedBooks);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchBooksHandler}>Search for J.K Rowling's work</button>
      </section>
        <BooksList books={books} />
    </React.Fragment>
  );
}

export default App;
