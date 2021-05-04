const { User } = require('../models');
const userData = [
    {
      "username": "Scott",
      "email": "scot@mail.com",
      "password": "password12345"
    },
    {
      "username": "Jenny",
      "email": "jenny@mail.com",
      "password": "password12345"
    },
    {
      "name": "Joseph",
      "email": "joseph@mail.com",
      "password": "password12345"
    },
    {
      "name": "Jenna",
      "email": "jenna@mail.com",
      "password": "password12345"
    }
  ];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
