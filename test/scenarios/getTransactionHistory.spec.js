import { expect } from "chai";
import "dotenv/config";
import { getTransactionHistory } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get Transaction History By User ID", () => {
    const validUserId = testData.users[2].user_id;
    const invalidUserId = "123213";

    it("should be successful when retrieving transaction history for a valid user ID", async () => {
        const payload = {
            start_date: "2024-08-15",
            end_date: "2024-08-19",
        };

        const res = await getTransactionHistory(payload, validUserId);

        expect(res.status).to.be.equal(200);
    });

    it("should be failed when using invalid user ID", async () => {
        const payload = {
            start_date: "2024-01-01",
            end_date: "2024-01-02",
        };

        const res = await getTransactionHistory(payload, invalidUserId);

        expect(res.body.code).to.be.equal(400);
    });

    it("should return failed with invalid start_date format", async () => {
        const payload = {
            start_date: "07-15-2024",
            end_date: "2024-01-02",
        };

        const res = await getTransactionHistory(payload, invalidUserId);

        expect(res.body.code).to.be.equal(400);
    });

    it("should return failed with invalid end_date format", async () => {
        const payload = {
            start_date: "2024-01-01",
            end_date: "07-19-2024",
        };

        const res = await getTransactionHistory(payload, invalidUserId);

        expect(res.body.code).to.be.equal(400);
    });
});
