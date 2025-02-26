const {readFileSync,writeFileSync}=require('fs');
const path=require('path');

const readData= ()=>{
    const data=readFileSync(path.resolve(__dirname,'../data/books.json'));
    return (JSON.parse(data,null,2));
}

const writeData=(data)=>{
    writeFileSync(path.resolve(__dirname,'../data/books.json'),data);
}

module.exports={readData,writeData};

