import Sequelize, { Model } from "sequelize"

class Consultation extends Model {
  static init(sequelize) {
    super.init(
      {
        patient_id: Sequelize.STRING,
        date: Sequelize.STRING,
        time: Sequelize.STRING,
      },
      { sequelize }
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.Patient, {
      // belongsTo significa pertecente a, e serve para fazer ligação entre arquivos,
      foreignKey: "patient_id", // foreignkey significa chave estranha, serve para fazer referencia de outro arquivo
      as: "patient",
    })
  }
}

export default Consultation
// os models sempre precisam, ser exportados para o index das migrations, necessario se conectar
// Model faz a interface entre a aplicação e o banco de dados, toda manipulação de dados é responsavel pelo model
