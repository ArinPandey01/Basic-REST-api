const {readFileSync,writeFileSync}=require('fs');

const readData= ()=>{
    const data=readFileSync('../data/books.json');
    return (JSON.parse(data,null,2));
}

const writeData=(data)=>{
    writeFileSync('../data/books.json',data);
}

module.exports={readData,writeData};

