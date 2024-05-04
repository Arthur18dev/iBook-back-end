const db = require('../db/conexao')
const administradorModel = require('../models/administradorModel')

const getAdministrador = async (req, res) => {
  const [row] = await administradorModel.getAdministrador(res)
  return res.json(row)
}

const createAdministrador = async (req, res) => {
  let { nome, email, senha } = req.body;

  const usuarioID = await administradorModel.create(nome, email, senha)

  res.status(201).json({
    message: "Administrador criado com sucesso",
    usuarioID
  });

}


const deleteAdministrador = (req, res) => {
  // DELETE
  let { id } = req.params;

  administradorModel.deleteAdm(id)
    .then(() => res.status(200).json({ message: "Administrador deletado com sucesso", }))
    .catch(() => res.status(500))

}


const editarAdministrador = async (req, res) => {
  let { nome, email, senha } = req.body;
  let { id } = req.params;

  const result = await administradorModel.update(nome, email, senha, id)

  return res.status(200).json({
    message: "Atualizado com sucesso!"
  })

}


module.exports = {
  getAdministrador,
  createAdministrador,
  deleteAdministrador,
  editarAdministrador
}