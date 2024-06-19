import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";
import "./BookDetail.css";

function BookDetail({ closeModal, id }) {
  const [book, setBook] = useState();

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
          <p>Statut: {book.status}</p>
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
