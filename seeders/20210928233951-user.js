'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [{
      username: 'John Doe',
      email: 'hello123@gmail.com',
      password: 'hello123',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Jim Doe',
      email: 'later123@gmail.com',
      password: 'later123',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Jane Doe',
      email: 'bye123@gmail.com',
      password: 'bye123',
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
