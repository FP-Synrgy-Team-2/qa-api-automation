import { expect } from "chai";
import "dotenv/config";
import { resetPasswordByEmail } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Verif OTP for reset password", () => {
    it("should be successful with valid payload", async () => {
        const validPayload = {
            otp: "",
        };

        const res = await resetPasswordByEmail(validPayload);
        expect(res.body.code).to.be.equal(200);
    });

    it("should fail with invalid email format", async () => {
        const invalidPayload = {
            otp: "9999999",
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
