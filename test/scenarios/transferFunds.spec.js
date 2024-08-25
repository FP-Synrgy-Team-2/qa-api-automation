import { expect } from "chai";
import "dotenv/config";
import { transferFunds } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Transfer Funds", () => {
    it("should be a successful transfer with valid data", async () => {
        const payload = {
            account_id: testData.account_bank_data[1].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(201);
    });

    it("should fail when account_id is invalid", async () => {
        const payload = {
            account_id: "123123",
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when account_id is null", async () => {
        const payload = {
            account_id: null,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when beneficiary_account is invalid", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: "123123",
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when beneficiary_account is null", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: null,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when amount is invalid", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: "00012",
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when amount is null", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: null,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when transaction_date is invalid", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "02-02-2021",
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should fail when transaction_date is null", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: null,
            note: "Uang kos",
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(400);
    });

    it("should success when note is null", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: null,
            saved: false,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(201);
    });

    it("should success when saved is null", async () => {
        const payload = {
            account_id: testData.account_bank_data[2].account_id,
            beneficiary_account: testData.account_bank_data[3].account_id,
            amount: 20000,
            transaction_date: "2024-07-15 15:05:14.293",
            note: "Uang kos",
            saved: null,
        };

        const res = await transferFunds(payload);
        expect(res.status).to.be.equal(201);
    });
});
