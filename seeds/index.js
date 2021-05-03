const seedUsers = require('./users');
const seedRecipe = require('./recipe');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedRecipe();
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
};

seedAll();