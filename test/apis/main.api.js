import "dotenv/config";
import request from "supertest";
import { getToken } from "../data/data.js";

export async function register(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/auth/register")
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function login(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/auth/login")
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function refreshToken(refreshToken) {
    const res = await request(process.env.BASE_URL)
        .get("/refresh-token/")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .query(refreshToken);

    return res;
}

export async function resetPasswordByEmail(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/auth/password")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function verifOtpResetPass(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/auth/password/otp")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function resetPassword(payload) {
    const res = await request(process.env.BASE_URL)
        .put("/auth/password")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function validatePin(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/bank-accounts/pin-validation")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function getUserById(userId) {
    const res = await request(process.env.BASE_URL)
        .get(`/users/${userId}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}

export async function getBankAccounts() {
    const res = await request(process.env.BASE_URL)
        .get("/bank-accounts")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}

export async function getBankAccountByUserId(user_id) {
    const res = await request(process.env.BASE_URL)
        .get(`/bank-accounts/user/${user_id}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}

export async function getBankAccountByAccountNumber(accountNumber) {
    const res = await request(process.env.BASE_URL)
        .get(`/bank-accounts/account/${accountNumber}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}

export async function transferFunds(payload) {
    const res = await request(process.env.BASE_URL)
        .post("/transactions")
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function getTransactionById(transaction_id) {
    const res = await request(process.env.BASE_URL)
        .get(`/transaction/${transaction_id}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}

export async function getTransactionHistory(payload, user_id) {
    const res = await request(process.env.BASE_URL)
        .post(`/transactions/history/${user_id}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json")
        .send(payload);

    return res;
}

export async function getSavedAccounts(user_id) {
    const res = await request(process.env.BASE_URL)
        .get(`/saved-accounts/${user_id}`)
        .auth(await getToken(), { type: "bearer" })
        .set("Content-Type", "application/json");

    return res;
}
