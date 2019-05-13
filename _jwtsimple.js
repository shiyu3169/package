const jwt = require("jwt-simple");
const config = require("config");
const uuid = require("uuid");

function getToken() {
    const payload = { id: uuid.v4(), name: "Shiyu" };

    const token = jwt.encode(payload, config.get("jwtSecret"));

    return { token };
}

function validateToken(token) {
    const decode = jwt.decode(token, config.get("jwtSecret"));

    return decode;
}

// console.log(getToken());
console.log(
    validateToken(
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjgzNzg5ZTg1LWY1OTMtNGQ2OC1hNGNmLTI4ODQ4NTgwNWNiYSIsIm5hbWUiOiJTaGl5dSJ9.S6FFBPO4oZBbkxoPGXxHfEXS64sWnJppHpsKHvTx2Ow"
    )
);
