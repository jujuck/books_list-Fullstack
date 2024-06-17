import PropTypes from "prop-types";
import "./BookRow.css";

function BookRow({ book }) {
  return (
    <div className="row">
      <h2>{book.title}</h2>
      <h4>Auteur : {book.author}</h4>
      <p>Date de parution : {book.release_date}</p>
      <p>Statut: {book.label}</p>
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookRow;
