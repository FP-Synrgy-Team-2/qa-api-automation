import { expect } from "chai";
import "dotenv/config";
import { getTransactionById, transferFunds } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get Transaction By ID", () => {
    let trxId = "";

    beforeEach(async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: true,
        };

        const trx = await transferFunds(payload);
        trxId = trx.body.data.transaction_id;
    });

    it("should be successful when retrieving a transaction with a valid ID", async () => {
        const res = await getTransactionById(trxId);

        expect(res.status).to.be.equal(200);
    });

    it("should return error for an invalid transaction ID", async () => {
        const res = await getTransactionById(
            "123d4a9-f6e5-42a4-b650-39326176090c"
        );

        expect(res.status).to.be.equal(404);
    });

    it("should return error for an empty transaction ID", async () => {
        const payload = "";
        const res = await getTransactionById(payload);

        expect(res.status).to.be.equal(404);
    });
});
