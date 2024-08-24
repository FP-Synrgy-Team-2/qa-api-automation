import { expect } from "chai";
import "dotenv/config";
import { validatePin } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Pin Validation", () => {
    it("should be successful with valid account number and pin", async () => {
        const payload = {
            account_number: testData.account_bank_data[2].account_number,
            pin: testData.account_bank_data[2].pin,
        };
console.log(payload);

        const res = await validatePin(payload);
        expect(res.body.code).to.be.equal(200);
    });

    it("should fail with invalid account number", async () => {
        const payload = {
            account_number: "0000000000",
            pin: testData.account_bank_data[2].pin,
        };

        const res = await validatePin(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with invalid pin", async () => {
        const payload = {
            account_number: testData.account_bank_data[2].account_number,
            pin: "000000",
        };

        const res = await validatePin(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with missing account number", async () => {
        const payload = {
            pin: testData.account_bank_data[2].pin,
        };

        const res = await validatePin(payload);

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail with missing pin", async () => {
        const payload = {
            account_number: testData.account_bank_data[2].account_number,
        };

        const res = await validatePin(payload);

        expect(res.body.code).to.be.equal(400);
        expect(res.body.message).to.equal("Pin is required.");
    });

    it("should fail with both account number and pin missing", async () => {
        const payload = {};

        const res = await validatePin(payload);

        expect(res.body.code).to.be.equal(400);
    });
});
