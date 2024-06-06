// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo le funzioni dei Posts
const {
    store,
    index,
    show
} = require("../controllers/posts.js");

router.post('/', store);

router.get('/', index);

router.get('/:slug', show);

module.exports = router;