const auth = (req, res, next) => {
    if(req.query.username == "Avneet"){
        next();
    }
    else{
        res.send("You are not authorized to access this!!!");
    }
}

export default auth;