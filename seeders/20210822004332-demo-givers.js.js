'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Givers",
      [
        {
          givername: 'Gail McCoy',
          address: '199 Stagecoach Cir.  Sun Prairie, WI 53590',
          gifts: 'shoes, clothes, books',
          userId: 1,
          notesent: false,
        },
        {
          givername: 'Ashley Deverwaere',
          address: null,
          gifts: 'Bluey doll',
          userId: 2,
          notesent: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
