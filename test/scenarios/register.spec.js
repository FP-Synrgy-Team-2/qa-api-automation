import { expect } from "chai";
import "dotenv/config";
import { faker } from "@faker-js/faker";
import { register } from "../apis/main.api.js";

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

describe("Register", () => {
    it("should be successful register with valid payload", async () => {
        let payload = {
            username: generateUsername(),
            email_address: faker.internet.email(),
            password: "Passw0rd123!",
            full_name: faker.person.fullName(),
            phone_number: randomPhoneNumber().validNumber,
        };

        const res = await register(payload);
        
        expect(res.status).to.be.equal(200);
    });

    it("should fail to register with empty payload", async () => {
        let payload = {};

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with invalid email address", async () => {
        let payload = {
            username: "Johndoe123456",
            email_address: "invalidemail.com",
            password: "Passw0rd123!",
            full_name: "John Doe",
            phone_number: "08223456766567",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with invalid password format", async () => {
        let payload = {
            username: "Johndoe123456",
            email_address: "jhondeo@mail.com",
            password: "password",
            full_name: "John Doe",
            phone_number: "08223456766567",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with invalid phone number", async () => {
        let payload = {
            username: "Johndoe123456",
            email_address: "jhondeo@mail.com",
            password: "Passw0rd123!",
            full_name: "John Doe",
            phone_number: "12345abc",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with empty username", async () => {
        let payload = {
            username: "",
            email_address: "jhondeo@mail.com",
            password: "Passw0rd123!",
            full_name: "John Doe",
            phone_number: "08223456766567",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with empty full name", async () => {
        let payload = {
            username: "Johndoe123456",
            email_address: "jhondeo@mail.com",
            password: "Passw0rd123!",
            full_name: "",
            phone_number: "08223456766567",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail to register with empty phone number", async () => {
        let payload = {
            username: "Johndoe123456",
            email_address: "jhondeo@mail.com",
            password: "Passw0rd123!",
            full_name: "John Doe",
            phone_number: "",
        };

        const res = await register(payload);
        expect(res.status).to.be.equal(400);
    });
});
