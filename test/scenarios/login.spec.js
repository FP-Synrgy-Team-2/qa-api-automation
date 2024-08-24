import { expect } from "chai";
import "dotenv/config";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { login, register } from "../apis/main.api.js";

function randomPhoneNumber() {
    return {
        validNumber: "08" + (Math.random() + "").substring(2, 12),
        invalidNumber: "62" + (Math.random() + "").substring(2, 13),
        lessThan16: "08" + (Math.random() + "").substring(2, 8),
        moreThan16: "08" + (Math.random() + "").substring(2, 17),
    };
}

function generateUsername() {
    const length = 10;
    let word = faker.person.firstName() + faker.string.numeric(2);
    return word;
}

describe("Login", () => {
    let registeredUser;
    let loginUser;

    before(async () => {
        const phoneNumbers = randomPhoneNumber();

        registeredUser = {
            username: generateUsername(),
            email_address: faker.internet.email(),
            password: "Passw0rd123!",
            full_name: faker.person.fullName(),
            phone_number: phoneNumbers.validNumber,
        };

        await register(registeredUser);

        loginUser = {
            username: registeredUser.username,
            password: registeredUser.password,
        };
    });

    it("should be successful login with valid credentials", async () => {
        const res = await login(loginUser);

        expect(res.status).to.be.equal(200);
    });

    it("should fail to login with invalid username", async () => {
        let payload = {
            username: "InvalidUsername",
            password: loginUser.password,
        };

        const res = await login(payload);

        expect(res.status).to.be.equal(400);
    });

    it("should fail to login with invalid password", async () => {
        let payload = {
            username: loginUser.username,
            password: "WrongPassword",
        };

        const res = await login(payload);

        expect(res.status).to.be.equal(400);
    });

    it("should fail to login with empty username", async () => {
        let payload = {
            username: "",
            password: loginUser.password,
        };

        const res = await login(payload);

        expect(res.status).to.be.equal(400);
    });

    it("should fail to login with empty password", async () => {
        let payload = {
            username: loginUser.username,
            password: "",
        };

        const res = await login(payload);

        expect(res.status).to.be.equal(400);
    });
});
