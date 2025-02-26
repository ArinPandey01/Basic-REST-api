const express=require('express');
const app=express();

const booksrouter=require('./routes/bookRoutes');
app.use(express.static('./public'));
app.use(express.json);
app.use('/book',booksrouter);

