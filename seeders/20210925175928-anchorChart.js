'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('anchorChart',
      [{
        subject: "Chemistry",
        grade: "10th",
        topic: "Periodic Trends",
        image: "../chemistryImages/periodicTrends.png",
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject: "Chemistry",
        grade: "10th",
        topic: "Electron Configuration",
        image: "../chemistryImages/electronConfiguration.jpeg",
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject: "Chemistry",
        grade: "10th",
        topic: "Lewis Dot Structures",
        image: "../chemistryImages/periodicTrends.jpeg",
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('anchorChart', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
