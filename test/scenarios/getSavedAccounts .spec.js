import { expect } from "chai";
import "dotenv/config";
import { getSavedAccounts } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get Saved Bank Accounts By User ID", () => {
    const validUserId = testData.users[2].user_id;
    const invalidUserId = "123123";

    it("should be successful when retrieving saved accounts for a valid user ID", async () => {
        const res = await getSavedAccounts(validUserId);

        expect(res.status).to.be.equal(200);
    });

    it("should return an error for an invalid user ID", async () => {
        const res = await getSavedAccounts(invalidUserId);

        expect(res.status).to.be.equal(400);
    });

    it("should return an error with null user ID", async () => {
        const res = await getSavedAccounts("");

        expect(res.status).to.be.equal(404);
    });
});
