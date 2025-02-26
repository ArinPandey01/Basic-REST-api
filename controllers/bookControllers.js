const { json } = require('express');
const {readData,writeData}=require('../utils/fileHelper.js');

const getAllBooks=(req,res)=>{

    try{
        const data=readData();
        res.status(200).send(data);
    }catch{
        res.status(500).send('Error occured while reading the file.');
    }
}

const getBookById=(req,res)=>{
    try{
        const id=req.params['id'];
        const books=readData();
        const book=books.find(book=>book.id==id);
        if(!book) res.status(400).send('Book with id does not exist');
        res.status(200).send(book);
    }catch{
        res.status(500).send('Error has occured while getting the book!!');
    }
}

const postbook=(req,res)=>{
    
    try{
        let book=req.body;
        if(!book.name || !book.author || !book.year) res.status(400).send('Invalid request');
        
        let books=readData();
        const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1; //or some other unique ID generator.
        book = {
            "id":newId,
            ...book
        }

        books.push(book);

        books=JSON.stringify(books,null,2);
        writeData(books);
        res.status(200).send(JSON.parse(books));
    }catch{
        res.send('Error has occured while posting in the file!!');
    }
}

const updatebook=(req,res)=>{
    try{
        const id=req.params['id'];
        const {name,author,year}=req.body;
        if(!name || !author || !year) res.status(400).send('Invalid request');
        const books=readData();
        let bookidx=books.findIndex(book=>book.id==id);
        books[bookidx].name=name;
        books[bookidx].author=author;
        books[bookidx].year=year;
        writeData(JSON.stringify(books,null,2));
        res.status(200).send(books[bookidx]);
    }catch{
        res.send('Error has occured while updating book in the file!!');
    }
}

const deletebook=(req,res)=>{
    try{
        const id=req.params['id'];
        let books=readData();
        if(!(books.find(book=>book.id==id))) res.status(400).send(`Book with id ${id} is not found`);
        books=books.filter((book)=>{
            return book.id!=id;
        });
        writeData(JSON.stringify(books,null,2));
        res.status(200).send(`Book with id ${id} deleted.`);
    }catch{
        res.send('Error has occured while trying to delete from the file!!');
    }

}

module.exports={deletebook,updatebook,getAllBooks,getBookById,postbook}