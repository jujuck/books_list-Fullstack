import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import Select from "./Form/Select";
import "./AddBookForm.css";

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
  const navigate = useNavigate();

  const handleBook = (event) => {
    setBook((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/books", book);
      navigate(".", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h3>Ajouter votre livre</h3>
      <form onSubmit={handleForm} className="form">
        <label>
          Titre
          <input
            type="text"
            value={book.title}
            name="title"
            required
            onChange={(event) => handleBook(event)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={book.description}
            onChange={(event) => handleBook(event)}
            required
            name="description"
          />
        </label>
        <label>
          Auteur
          <input
            type="text"
            value={book.author}
            onChange={(event) => handleBook(event)}
            required
            name="author"
          />
        </label>
        <label>
          Parution
          <input
            type="text"
            value={book.release_date}
            onChange={(event) => handleBook(event)}
            required
            name="release_date"
          />
        </label>
        <Select handleForm={handleBook} name="style_id" title="styles" />
        <Select handleForm={handleBook} name="status_id" title="status" />
        <button type="submit" className="btn">
          Ajouter
        </button>
      </form>
    </section>
  );
}

export default AddBookForm;
