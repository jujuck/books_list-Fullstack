import PropTypes from "prop-types";
import "./BookRow.css";

function BookRow({ book, index }) {
  return (
    <div className={`row ${index % 2 === 0 ? "light" : ""}`}>
      <h2 className="col-3">{book.title}</h2>
      <h4 className="col-2">{book.author}</h4>
      <p className="col-2">{book.release_date}</p>
      <p className="col-2">{book.label}</p>
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
  index: PropTypes.number.isRequired,
};
export default BookRow;
