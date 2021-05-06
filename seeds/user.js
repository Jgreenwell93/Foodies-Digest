const { User } = require('../models');
const userData = [
    {
      "username": "Scott",
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

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
