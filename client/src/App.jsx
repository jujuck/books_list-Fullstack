import { useLoaderData } from "react-router-dom";

import BookRow from "./components/BookRow";
import "./App.css";

function App() {
  const books = useLoaderData();

  return (
    <main className="container">
      <h1>Ma liste de livres</h1>
      <section>
        {books.map((book) => (
          <BookRow book={book} key={book.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
