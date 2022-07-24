import routes from "./routes"
import express from "express"

import cors from "cors"
import "./database"

class App {
  constructor() {
    this.app = express()

    this.app.use(cors())
    this.middlewares()
    this.router()
  }

  middlewares() {
    this.app.use(express.json())
  }

  router() {
    this.app.use(routes)
  }
}

export default new App().app
