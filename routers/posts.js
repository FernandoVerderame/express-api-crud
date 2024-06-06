// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo le funzioni dei Posts
const {
    store,
    index,
    show,
    update
} = require("../controllers/posts.js");

router.post('/', store);

router.get('/', index);

router.get('/:slug', show);

router.put('/:slug', update);

module.exports = router;