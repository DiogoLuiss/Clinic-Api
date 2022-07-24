module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123456",
  database: "Clinic",
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
// Nesta parte vc tem que conectar o sequelize com o banco de dados
