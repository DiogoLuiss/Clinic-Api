import * as Yup from "yup"
import Consultation from "../models/Consultation"
import Patient from "../models/Patient"

class ConsultationController {
  async store(request, response) {
    const schema = Yup.object().shape({
      patient_id: Yup.string().required(),
      date: Yup.string().required(),
      time: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    try {
      const { patient_id, date, time } = request.body

      const Create = await Consultation.create({
        patient_id,
        date,
        time,
      })

      return response.status(200).json(Create)
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      patient_id: Yup.string().required(),
      date: Yup.string().required(),
      time: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { id } = request.params

    const ConsultationExist = await Consultation.findByPk(id)

    if (!ConsultationExist) {
      return response
        .status(401)
        .json({ error: "make sure your id Consultation is correct" })
    }

    try {
      const { patient_id, date, time } = request.body

      const R = await Consultation.update(
        {
          patient_id,
          date,
          time,
        },
        { where: { id } }
      )

      return response.status(201).json(R)
    } catch (err) {
      return response.status(401).json({ error: err.errors })
    }
  }

  async index(request, response) {
    const consultations = await Consultation.findAll({
      include: [
        {
          model: Patient, // Serve para relacionar com o grupo de informações
          as: "patient",
          attributes: ["id", "name", "tel"], // Informações que eu vou puxar
        },
      ],
    })

    return response.json(consultations)
  }

  async delete(request, response) {
    const { id } = request.params

    const ConsultationExist = await Consultation.findByPk(id)
    if (!ConsultationExist) {
      return response
        .status(401)
        .json({ error: "make sure your id Consultation is correct" })
    }

    await Consultation.destroy({ where: { id } })

    return response
      .status(200)
      .json({ message: "ConsultationExist successfully Deleted " })
  }
}

export default new ConsultationController()
