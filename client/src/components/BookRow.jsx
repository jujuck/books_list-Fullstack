import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import BookDetail from "./BookDetail";
import "./BookRow.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "10rem",
    bottom: "10rem",
    height: "80%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function BookRow({ book, index }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className={`row ${index % 2 === 0 ? "light" : ""}`}>
      <h2 className="col-3">{book.title}</h2>
      <h4 className="col-2">{book.author}</h4>
      <p className="col-2">{book.release_date}</p>
      <p className="col-2">{book.label}</p>
      <div className="col-2">
        <button
          type="button"
          onClick={() => setIsOpen(!modalIsOpen)}
          className="btn"
        >
          Plus
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(!modalIsOpen)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <BookDetail closeModal={() => setIsOpen(!modalIsOpen)} id={book.id} />
      </Modal>
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default BookRow;
