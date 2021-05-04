const { User } = require('../models');
const userData = [
    {
      "userusername": "Scott",
      "password": "password12345"
    },
    {
      "username": "Jenny",
      "password": "password12345"
    },
    {
      "username": "Joseph",
      "password": "password12345"
    },
    {
      "username": "Jenna",
      "password": "password12345"
    }
  ];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
