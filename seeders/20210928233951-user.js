'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User',
      [{
        username: 'mwoolf87',
        email: 'mwoolf87@test.com',
        password: 'admin0624',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lopezg3000',
        email: 'lopezg3000@test.com',
        password: '1234',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'teyon1234',
        email: 'teyon1234@test.com',
        password: '1234',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'joe1234',
        email: 'joe1234@test.com',
        password: '1234',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
