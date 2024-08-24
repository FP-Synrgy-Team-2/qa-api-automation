import { expect } from "chai";
import "dotenv/config";
import { getBankAccountByUserId } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get Bank Account by User ID", () => {
    const validUserId = testData.users[2].user_id;
    const invalidUserId = "5c98950f-18c0-4f92-a639-1237f48b1f2";
    const emptyUserId = "";

    it("should be successful and return bank account information for a valid user ID", async () => {
        const res = await getBankAccountByUserId(validUserId);

        expect(res.status).to.be.equal(200);
    });

    it("should return 404 for an invalid user ID", async () => {
        const res = await getBankAccountByUserId(invalidUserId);

        expect(res.status).to.be.equal(404);
    });

    it("should return 400 for an empty user ID", async () => {
        const res = await getBankAccountByUserId(emptyUserId);

        expect(res.status).to.be.equal(404);
    });
});
