const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const bookActions = require("./controllers/bookActions");
const styleActions = require("./controllers/styleActions");
const statusActions = require("./controllers/statusActions");

// Route to get a list of items
router.get("/books", bookActions.browse);

router.get("/books/:id", bookActions.read);

router.post("/books", bookActions.add);

router.get("/styles", styleActions.browse);
router.get("/status", statusActions.browse);

/* ************************************************************************* */

module.exports = router;
