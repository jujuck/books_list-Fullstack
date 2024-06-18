// Import access to database tables
const client = require("../../database/client");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all books from the database
    const [books] = await client.query(
      "SELECT b.id, b.title, b.release_date, b.status_id, b.author,s.label FROM book as b INNER JOIN status as s ON s.id = b.status_id"
    );

    // Respond with the books in JSON format
    res.status(200).json(books);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const [item] = await client.query(
      `SELECT b.id, b.title, b.description, b.author, b.release_date, s.label as status, sy.label as style FROM book as b INNER JOIN status as s ON s.id = b.status_id INNER JOIN style as sy ON sy.id = b.style_id WHERE b.id = ?`,
      [req.params.id]
    );

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const book = req.body;

  try {
    // Insert the book into the database
    const insertId = await client.query(
      "INSERT INTO book(title, description, author, release_date, style_id, status_id) VALUES (?, ?, ?, ?, ?, ?)",
      [
        book.title,
        book.description,
        book.author,
        book.release_date,
        book.style_id,
        book.status_id,
      ]
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ id: insertId[0].insertId, ...req.body });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
