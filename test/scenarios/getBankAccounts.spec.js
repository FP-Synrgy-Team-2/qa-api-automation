import { expect } from "chai";
import "dotenv/config";
import { getBankAccounts } from "../apis/main.api.js";

describe("Get All Bank Accounts", () => {
    it("should be successful and return a list of bank accounts", async () => {
        const res = await getBankAccounts();

        expect(res.status).to.be.equal(200);
    });
});
