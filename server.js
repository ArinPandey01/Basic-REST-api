const express=require('express');
const booksrouter=require('./routes/bookRoutes');
const app=express();

app.use(express.static('./public'));
app.use(express.json());
app.use('/books',booksrouter);

app.listen(3000,()=>{
    console.log('Listening on port 3000...')
})