import { expect } from "chai";
import "dotenv/config";
import request from "supertest";
import { getUserById } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Get User by ID", () => {
    it("should be successful with a valid user ID", async () => {
        const userId = testData.users[2].user_id;

        const res = await getUserById(userId);

        expect(res.body.code).to.be.equal(200);
    });

    it("should fail with an invalid user ID", async () => {
        const userId = "!@#$123123";

        const res = await getUserById(userId);

        expect(res.body.status).to.be.equal(404);
    });

    it("should fail with a missing user ID", async () => {
        const res = await getUserById();

        expect(res.body.status).to.be.equal(404);
    });
});
