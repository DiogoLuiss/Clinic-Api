module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consultations", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      patient_id: {
        type: Sequelize.INTEGER,
        references: { model: "patients", Key: "id" }, // Este codigo faz o relacionamento entre banco de dados e o outro.
        onUpdate: "CASCADE", // Para atualizar ambas as tabelas
        onDelete: "SET NULL", // deletar coisas de ambas as tabelas
        allowNull: true,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("consultations")
  },
}
