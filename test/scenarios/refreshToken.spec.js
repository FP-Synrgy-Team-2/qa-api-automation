import { expect } from "chai";
import "dotenv/config";
import request from "supertest";
import { faker } from "@faker-js/faker";
import { login, refreshToken } from "../apis/main.api.js";
import { testData } from "../data/data.js";

describe("Refresh Token", () => {
    let refreshTokenValue;

    before(async () => {
        const res = await login({
            username: testData.username,
            password: testData.password,
        });

        refreshTokenValue = res.body.data.refresh_token;
    });

    it("should successfully retrieve a new access token using refresh token", async () => {
        const res = await refreshToken(refreshTokenValue);
        
        expect(res.body.code).to.be.equal(200);
    });

    it("should fail to retrieve a new access token with an empty refresh token", async () => {
        const res = await refreshToken("");

        expect(res.body.code).to.be.equal(400);
    });

    it("should fail to retrieve a new access token with an invalid refresh token", async () => {
        const res = await refreshToken("InvalidRefreshToken123");

        expect(res.body.code).to.be.equal(400);
    });
});
