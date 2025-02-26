const logger=(req,res,next)=>{
    var datetime = new Date();
    console.log(`${method} request made at ${route} on ${datetime.toISOString().slice(0,10)}`);
    next();
};

module.exports=logger;