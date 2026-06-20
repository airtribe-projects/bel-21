const logger = (req, res, next) => {
    console.log(`[Logger 1]: ${req.method} request received on ${req.url}`);   
    next();
}


const logger2 = (req, res, next) => {
    console.log(`[Logger 2]: ${req.method} request received on ${req.url}`);   
    next();
}

module.exports = {logger, logger2}