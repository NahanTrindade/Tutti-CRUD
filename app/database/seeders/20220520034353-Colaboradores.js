'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colaboradores', [{
      nome: 'Nahan Trindade Pagithubssos',
      cpf: '03762949220',
      setor: 'Desenvolvimento',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colaboradores', null, {});
  }
};
