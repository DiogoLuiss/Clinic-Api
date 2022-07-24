import * as Yup from "yup"
import Patients from "../models/Patient"

class PatientController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      tel: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, tel } = request.body

    const Create = await Patients.create({
      name,
      tel,
    })

    return response.status(200).json(Create)
  }

  async index(request, response) {
    const patient = await Patients.findAll({})

    return response.json(patient)
  }
}

export default new PatientController()
