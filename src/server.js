const express = require('express');
const db =require('./db');
const booksRouter = require('./routes/booksRouter');
const app = express();
 
app.use(express.json())
app.use('/books',booksRouter);

app.listen(3001,()=> {
console.log('listening on port 3001');
});
//7Ykbpq8Rc81cVM5j