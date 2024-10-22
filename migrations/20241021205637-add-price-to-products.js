'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'price', {
      type: Sequelize.FLOAT, // ou o tipo de dado que você deseja
      allowNull: false, // ajuste conforme necessário
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'price');
  }
};
