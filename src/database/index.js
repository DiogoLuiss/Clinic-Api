import Sequelize from "sequelize"

import Patient from "../app/models/Patient"
import User from "../app/models/User"
import Consultation from "../app/models/Consultation"

import configDatabase from "../config/database"

const models = [Patient, User, Consultation]

class Database {
  constructor() {
    this.init()
  }

  m
  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()

// Aqui se faz a conexão do Model com a database
