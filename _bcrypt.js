const bcrypt = require("bcryptjs");

async function hashPassword(plaintext) {
    const user = {
        name: "Shiyu",
        email: "brad@gmail.com",
        password: plaintext
    };
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(plaintext, salt);

    console.log(user.password);
    // return user.password;
}

hashPassword("123456");

async function comparePasswords(plaintext, hash) {
    const isMatch = await bcrypt.compare(plaintext, hash);

    if (isMatch) {
        console.log("Match");
    } else {
        console.log("Not Match");
    }
}

comparePasswords(
    "123456",
    "$2a$10$R7Cdtls.GRQj371.NvUEeO94IA/r9Sd8K0bL9P0p0f.8SLoTgwjum"
);
