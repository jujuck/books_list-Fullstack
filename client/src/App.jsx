import { useLoaderData } from "react-router-dom";

import BookRow from "./components/BookRow";
import AddBookForm from "./components/AddBookForm";
import "./App.css";

function App() {
  const books = useLoaderData();

  return (
    <main className="container">
      <h1>Ma liste de livres</h1>
      <section className="container table">
        <AddBookForm />
        <div className="row">
          <h5 className="col-3">Titre</h5>
          <h5 className="col-2">Auteur</h5>
          <h5 className="col-2">Date de parution</h5>
          <h5 className="col-2">Statut</h5>
          <h5 className="col-2">Actions</h5>
        </div>
        {books.map((book, index) => (
          <BookRow book={book} key={book.id} index={index} />
        ))}
      </section>
    </main>
  );
}

export default App;
