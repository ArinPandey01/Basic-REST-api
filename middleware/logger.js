const logger=(req,res,next)=>{
    var datetime = new Date();
    console.log(`${req.method} request made at ${req.url} on ${datetime.toISOString().slice(0,10)}`);
    next();
};

module.exports={logger};