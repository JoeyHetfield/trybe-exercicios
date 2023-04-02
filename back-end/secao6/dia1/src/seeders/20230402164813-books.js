'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Books', 
  [
    {
      title: 'Hobbit',
      author: 'Tolkien',
      pageQuantity: 227,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {}),

  down: async (queryInterface, Sequelize) =>  queryInterface.bulkDelete('Users', null, {})
}