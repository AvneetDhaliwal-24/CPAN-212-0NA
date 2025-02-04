
const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers); //retunring information about user's device who tried to access this endpoint/route
    console.log(Date());
    next();
}

export default logger;
//module.exports logger;