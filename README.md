## Esercizio di oggi: Express Api Crud

Iniziamo a creare le API per il nostro blog. Iniziate con un nuovo progetto Express + Prisma.

Potete utilizzare lo schema Prisma che avete creato nell'esercizio di ieri.

### Definizione degli endpoint

Vi chiediamo di definire i seguenti endpoint:

- POST `/posts` per creare un nuovo post.

- GET `/posts/:slug` per recuperare un post utilizzando il suo slug.

- GET `/posts` per recuperare tutti i post presenti nel database, con la possibilità di filtrare per:

1. Post pubblicati.

2. Post che contengono una determinata parola nel titolo o nel contenuto.

- PUT `/posts/:slug` per aggiornare un post.

- DELETE `/posts/:slug` per eliminare un post.