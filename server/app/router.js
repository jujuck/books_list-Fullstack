const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const bookActions = require("./controllers/bookActions");

// Route to get a list of items
router.get("/books", bookActions.browse);

router.get("/books/:id", bookActions.read);

/* ************************************************************************* */

module.exports = router;
