import { expect } from "chai";
import "dotenv/config";
import { resetPassword } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Reset Password", () => {
    it("should be successful with all valid parameters", async () => {
        const payload = {
            email_address: testData.users[2].email,
            otp: "071688",
            new_password: "NewPassword123!",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(200);
    });

    it("should fail with null email address", async () => {
        const payload = {
            email_address: "",
            otp: "071688",
            new_password: "NewPassword123",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with null OTP", async () => {
        const payload = {
            email_address: "johndoe@example.com",
            otp: "",
            new_password: "NewPassword123",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with null new password", async () => {
        const payload = {
            email_address: "johndoe@example.com",
            otp: "071688",
            new_password: "",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with invalid email address", async () => {
        const payload = {
            email_address: "invalid-email",
            otp: "071688",
            new_password: "NewPassword123",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with invalid OTP format", async () => {
        const payload = {
            email_address: "johndoe@example.com",
            otp: 123123,
            new_password: "NewPassword123",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with invalid new password format", async () => {
        const payload = {
            email_address: "johndoe@example.com",
            otp: "123456",
            new_password: "test",
        };

        const res = await resetPassword(payload);

        expect(res.body.code).to.be.equal(400);
    });
});
