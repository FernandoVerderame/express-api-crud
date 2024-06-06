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
        const where = {};
        const { published, text } = req.query;

        if (published) where.published = published === 'true';

        if (text) {
            where.OR = [
                { title: { contains: text } },
                { content: { contains: text } }
            ];
        }

        const posts = await prisma.post.findMany({ where });
        res.json(posts);
    } catch (err) {
        console.error(err);
    }
}

// Show dei Posts
const show = async (req, res) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.findUnique({
            where: { slug: slug }
        });

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: `Post con slug ${slug} non trovata` })
        }

    } catch (err) {
        console.error(err);
    }
}

// Update dei Posts
const update = async (req, res) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.update({
            where: { slug: slug },
            data: req.body
        });
        res.json(post);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    store,
    index,
    show,
    update
}