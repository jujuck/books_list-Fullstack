import { useState } from "react";
import connexion from "../services/connexion";

const initialBook = {
  title: "",
  description: "",
  author: "",
  release_date: "",
  style_id: null,
  status_id: null,
};

function AddBookForm() {
  const [book, setBook] = useState(initialBook);

  const handleBook = (event) => {
    setBook((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/books", book);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleForm}>
      Ajouter votre livre
      <label>
        Titre
        <input
          type="text"
          value={book.title}
          name="title"
          onChange={(event) => handleBook(event)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={book.description}
          onChange={(event) => handleBook(event)}
          name="description"
        />
      </label>
      <label>
        Auteur
        <input
          type="text"
          value={book.author}
          onChange={(event) => handleBook(event)}
          name="author"
        />
      </label>
      <label>
        Parution
        <input
          type="text"
          value={book.release_date}
          onChange={(event) => handleBook(event)}
          name="release_date"
        />
      </label>
      <label>
        Style
        <input
          type="number"
          value={book.style_id}
          onChange={(event) => handleBook(event)}
          name="style_id"
        />
      </label>
      <label>
        Statut
        <input
          type="number"
          value={book.status_id}
          onChange={(event) => handleBook(event)}
          name="status_id"
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddBookForm;
