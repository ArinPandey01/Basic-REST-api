const {readData,writeData}=require('../utils/fileHelper.js');

const getAllBooks=(res,req)=>{
    try{
        const data=readData();
        res.status(200).send(data);
    }catch{
        res.send('Error occured while reading the file.');
    }
}

const getBookById=(res,req)=>{
    try{
        const id=req.params['id'];
        const books=readData();
        const book=books.find(book=>book.id===id);
        res.status(200).send(book);
    }catch{
        res.send('Error has occured while .... the file!!');
    }
}

const postbook=(req,res)=>{
    try{
        const book=req.body;
        if(!book.name || !book.author || !book.year) res.status(400).send('Invalid request');
        
        const books=readData();
        const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1; //or some other unique ID generator.
        book = {
            "id":newId,
            ...book
        }

        books.push(book);
        writeData(books);
        res.status(200).send(books);
    }catch{
        res.send('Error has occured while .... the file!!');
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
        writeData(books);
        res.status(200).send(books[bookidx]);
    }catch{
        res.send('Error has occured while .... the file!!');
    }
}

const deletebook=(req,res)=>{
    try{
        const id=req.params['id'];
        let books=readData();
        books=books.filter((book)=>{
            return book.id!=id;
        });
        res.status(200).send(books);
    }catch{
        
    }
    res.send('Error has occured while .... the file!!');

}

module.exports={deletebook,updatebook,getAllBooks,getBookById,postbook}