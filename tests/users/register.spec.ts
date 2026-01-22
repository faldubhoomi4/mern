
import { describe } from "node:test";
import { request } from "https";
import app from "../../src/app";
import e from "express";
describe("POST/auth/register", () => {
    describe("given all fields", ()=>{
        it("should return 201 status code", async ()=>{
            // AAA
            // Arrange
            const userData={
               firstname :"bhoomi",
               lastname: "faldu",
               email:"faldubhoomi4@gmailk.com",
               password:"bhoomi678",}
            }
            // Act
            const response = await request(app)
            .post("/auth/register").send(userData);
 
            // Assert 
            expect(response.statusCode).toBe(201);
    } );
    describe("filed are missing", ()=>{});  
});
     




