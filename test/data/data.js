import { login } from "../apis/main.api.js";

export const testData = {
    users: [
        {
            user_id: "e30283ae-d7b0-452f-8af1-568f203af797",
            username: "Admin1",
            email: "admin@mail.com",
            full_name: "Admin",
            phone_number: "8123456789",
            password: "Admin123!",
        },
        {
            user_id: "821e76ef-eb6e-4f04-b884-3c3fef80fbff",
            username: "Johndoe123",
            email: "johndoe@mail.com",
            full_name: "John Doe",
            phone_number: "8987654321",
            password: "Johndoe123!",
        },
        {
            user_id: "4c98950f-18c0-4f92-a639-17b27f48b1e5",
            username: "Fulan123",
            email: "fulan@mail.com",
            full_name: "Fulan",
            phone_number: "8123456789",
            password: "Fulan123!",
        },
        {
            user_id: "64320d3a-2517-47fd-8cab-3a2feca3558c",
            username: "Merchant123",
            email: "merchant@mail.com",
            full_name: "Merchant",
            phone_number: "8123456789",
            password: "Merchant123!",
        },
    ],
    account_bank_data: [
        {
            account_id: "ae1e7697-fb12-4b6d-beb0-8dab80349c6a",
            owner_name: "Admin",
            account_number: "408058481847",
            balance: 1000000,
            user_id: "e30283ae-d7b0-452f-8af1-568f203af797",
            pin: "123456",
        },
        {
            account_id: "5261b75a-0a44-42c2-a491-53d97c4ceaf8",
            owner_name: "John Doe",
            account_number: "403956851440",
            balance: 2000000,
            user_id: "821e76ef-eb6e-4f04-b884-3c3fef80fbff",
            pin: "135797",
        },
        {
            account_id: "e7e97243-df2b-4d3b-a947-2e4624b16983",
            owner_name: "Fulan",
            account_number: "404938255577",
            balance: 20000000,
            user_id: "4c98950f-18c0-4f92-a639-17b27f48b1e5",
            pin: "142621",
        },
        {
            account_id: "9ab216dd-8e12-47a1-9c50-f6149be1098c",
            owner_name: "Merchant",
            account_number: "404707483447",
            balance: 20000000,
            user_id: "64320d3a-2517-47fd-8cab-3a2feca3558c",
            pin: "121212",
        },
    ],
};

export async function getToken() {
    const loginPayload = {
        username: testData.users[2].username,
        password: testData.users[2].password,
    };

    const loginResponse = await login(loginPayload);
console.log(loginResponse.body.data.access_token);

    return loginResponse.body.data.access_token;
}

function randomPhoneNumber() {
    return {
        validNumber: "08" + (Math.random() + "").substring(2, 12),
        invalidNumber: "62" + (Math.random() + "").substring(2, 13),
        lessThan16: "08" + (Math.random() + "").substring(2, 8),
        moreThan16: "08" + (Math.random() + "").substring(2, 17),
    };
}

function generateUsername() {
    const length = 10;
    let word = faker.person.firstName() + faker.string.numeric(2);
    return word;
}
