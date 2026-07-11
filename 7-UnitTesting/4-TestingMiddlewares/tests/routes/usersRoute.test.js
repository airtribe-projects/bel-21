const router = require("../../src/routes/usersRoute");
const express = require("express");
const { registerUser, loginUser } = require("../../src/controllers/usersController");
const request = require("supertest");

jest.mock("../../src/controllers/usersController");

const app = express(); 
app.use(express.json());
app.use(router);

describe("User Authentication Routes Tests: ", () => {
    test("Tests for POST /register", async () => {
        const user = {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            role: "user"
        };  

        registerUser.mockResolvedValue(user);

        const response = await request(app)
                            .post('/register')
                            .send(user)
                            .expect(201);

        // toBe --> Primitive checks
        // ToEqual --> Object and array                    
        // expect(response.body).toBe(user);
        expect(response.body).toEqual(user);
        expect(registerUser).toHaveBeenCalledWith(user);
        expect(registerUser).toHaveBeenCalledTimes(1);
    })

     it('should successfully log in a user and return a token', async () => {
            const user = {
                email: "john@example.com",
                password: "password123"
            };

            const token = "sample.jwt.token";

            // Mock the loginUser function to return a token
            loginUser.mockResolvedValue(token);

            const response = await request(app)
                .post('/login')
                .send(user)
                .expect(200);

            expect(response.body.token).toBe(token);
            expect(loginUser).toHaveBeenCalledWith(user.email, user.password);
        })

})

