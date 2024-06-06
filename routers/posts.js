// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo le funzioni dei Posts
const {
    store,
    index
} = require("../controllers/posts.js");

router.post('/', store);

router.get('/', index);

module.exports = router;