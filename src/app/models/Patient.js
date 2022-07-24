import Sequelize, { Model } from "sequelize"

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        tel: Sequelize.STRING,
      },
      { sequelize }
    )
    return this
  }
}
export default Patient
// os models sempre precisam, ser exportados para o index das migrations, necessario se conectar
