import { expect } from "chai";
import "dotenv/config";
import { getBankAccountByAccountNumber } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get Bank Account by Account Number", () => {
    const validAccountNumber = testData.account_bank_data[2].account_number;
    const invalidAccountNumber = "0000000000";
    const emptyAccountNumber = "";

    it("should be successful and return bank account information for a valid account number", async () => {
        const res = await getBankAccountByAccountNumber(validAccountNumber);

        expect(res.status).to.be.equal(200);
    });

    it("should return 404 for an invalid account number", async () => {
        const res = await getBankAccountByAccountNumber(invalidAccountNumber);

        expect(res.status).to.be.equal(404);
    });

    it("should return 400 for an empty account number", async () => {
        const res = await getBankAccountByAccountNumber(emptyAccountNumber);

        expect(res.status).to.be.equal(404);
    });
});
