const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "dipjoy_paul",
        email:"dipjoy@gmail.com",
    },

    {
        id: uuidv4(),
        username: "pritam paul",
        email:"pritam@gmail.com",
    }
];




module.exports = users;