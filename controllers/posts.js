// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

// Importo la funzione per generare lo slug
const createSlug = require("../utils/slug.js");

// Store dei Posts
const store = async (req, res) => {

    const { title, content } = req.body;

    // Genero lo slug
    const slug = createSlug(title);

    const data = {
        title,
        slug: slug,
        image: req.body.image ? req.body.image : '',
        content,
        published: req.body.published ? true : false
    }

    try {
        const post = await prisma.post.create({ data });
        res.status(200).send(post);
    } catch (err) {
        console.error(err);
    }
}


// Index dei Posts
const index = async (req, res) => {

    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    store,
    index,
}