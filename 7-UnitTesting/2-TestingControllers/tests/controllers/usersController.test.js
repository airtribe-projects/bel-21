const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModel = require("../../src/models/usersModel");

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer;


// Jest hook that runs before everything
beforeAll (async () => {
    mongoServer = await MongoMemoryServer.create();

    console.log("MongoServer: ", mongoServer);
    const uri = await mongoServer.getUri();
    await mongoose.connect(uri);
})


describe('User Authentication Tests', () => {
    describe('Test registerUser function', () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            
            const dbUser = await registerUser(user);

            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            // Should give an error
            // expect(user.password).toBe(dbUser.password);
            
            expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true);
        })
    })
})
            

    








