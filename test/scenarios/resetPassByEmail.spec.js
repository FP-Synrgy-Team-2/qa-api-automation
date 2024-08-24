import { expect } from "chai";
import "dotenv/config";
import { resetPasswordByEmail } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Reset Password By Email", () => {
    it("should be successful with valid payload", async () => {
        const validPayload = {
            email_address:  testData.users[2].email,
        };

        const res = await resetPasswordByEmail(validPayload);
        expect(res.body.code).to.be.equal(200);
    });

    it("should fail with invalid email format", async () => {
        const invalidPayload = {
            email_address: "invalidemail.com",
        };

        const res = await resetPasswordByEmail(invalidPayload);
        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with empty email payload", async () => {
        const emptyPayload = {};

        const res = await resetPasswordByEmail(emptyPayload);
        expect(res.body.code).to.be.equal(400);
    });
});
