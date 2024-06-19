import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";
import Select from "./Form/Select";
import "./BookDetail.css";

function BookDetail({ closeModal, id }) {
  const [book, setBook] = useState();

  const updateBook = async (event) => {
    const { value } = event.target;
    try {
      await connexion.put(`/api/books/${id}`, {
        status_id: value,
      });
      const newBook = { ...book };
      newBook.status_id = +value;
      setBook(newBook);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getBook = async () => {
      try {
        const myBook = await connexion.get(`/api/books/${id}`);
        setBook(myBook.data);
      } catch (error) {
        console.error(error);
      }
    };
    getBook();
  }, [id]);

  return (
    <div className="modal">
      <button type="button" onClick={() => closeModal()} className="btn">
        Fermer
      </button>
      {book && (
        <div>
          <h2>Titre du livre : {book.title}</h2>
          <p>Synopsis: {book.description}</p>
          <ul>
            <li>Parution: {book.release_date}</li>
            <li>Auteur: {book.author}</li>
            <li>Style: {book.style}</li>
          </ul>
          <Select
            handleForm={updateBook}
            name="status_id"
            title="status"
            value={book.status_id}
          />
        </div>
      )}
    </div>
  );
}

BookDetail.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookDetail;
