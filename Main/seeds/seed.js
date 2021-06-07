const sequelize = require('../config/connection');
const { User, Dashboard, Comment } = require('../models');

const userData = require('./userData.json');
const dashboardData = require('./dashboardData.json');
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const dashboard of dashboardData) {
    await Dashboard.create({
      ...dashboard,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }
 

  process.exit(0);
};

seedDatabase();
