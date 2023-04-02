const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Book = require ('./controllers/user.controller');

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getId); 
app.post('/books', Book.createBook);
app.put('/books/:id', Book.updateBook);
app.delete('/books/:id', Book.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));