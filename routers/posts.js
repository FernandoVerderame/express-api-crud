// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo le funzioni dei Posts
const {
    store
} = require("../controllers/posts.js");

router.post('/', store);

module.exports = router;