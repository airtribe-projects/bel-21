const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


const SALT_ROUND = 5;

const registerUser = async (reqUser) => {
    const user = {...reqUser};
    user.password = bcrypt.hashSync(user.password, SALT_ROUND);
    const dbUser = await usersModel.create(user);
    return dbUser;
};
 
// email jay@airtribe, 12345678
const loginUser = async (email, password) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }

    // This will not work
    const isSamePassword = bcrypt.compareSync(password, dbUser.password);
    
    // dbUser.password == bcrypt.hashSync(password, SALT_ROUND);
    
    console.log(dbUser.password, bcrypt.hashSync(password, SALT_ROUND));

    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const payload = {
        id: dbUser.id,
        role: dbUser.role
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
    
    return {status: "ok", token};
}


module.exports = {registerUser, loginUser};


// F(1000) = 0
// F(1005) = 0
// F(1002) = 2
// F(1002) = 2
// F(1002) = 2

// Hashing Function is % 5 F