const { User } = require('../models');
const userData = [
    {
      "name": "Scott",
      "email": "scot@mail.com",
      "password": "password12345"
    },
    {
      "name": "Jennifer",
      "email": "jennifer@mail.com",
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
