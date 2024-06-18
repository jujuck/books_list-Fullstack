import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

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
    <>
      <button type="button" onClick={() => closeModal()}>
        close
      </button>
      {book && (
        <div>
          <h2>Titre du livre : {book.title}</h2>
          <p>Synopsis: {book.description}</p>
          <ul>
            <li>Parution: {book.release_date}</li>
            <li>Status: {book.status}</li>
            <li>Style: {book.style}</li>
            <li>Auteur: {book.author}</li>
          </ul>
        </div>
      )}
    </>
  );
}

BookDetail.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookDetail;
