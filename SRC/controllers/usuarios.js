
const usuariosModel = require('../models/usuarioModel')

const getAll = async (req, res) => {
  const [row] = await usuariosModel.getAll(res)
  return res.json(row)
}

const createUsuario = async (req, res) => {
  let { nome, email, senha } = req.body;

  const usuarioID = await usuariosModel.create(nome, email, senha)

  res.status(201).json({
    message: "Usuario criado com sucesso",
    usuarioID
  });

}


const deleteUsuario = (req, res) => {
  // DELETE
  let { id } = req.params;

  usuariosModel.deleteUser(id)
    .then(() => res.status(200).json({ message: "Usuario deletado com sucesso", }))
    .catch(() => res.status(500))

}


const editarUsuario = async (req, res) => {
  let { nome, email, senha } = req.body;
  let { id } = req.params;

  const result = await usuariosModel.update(nome, email, senha, id)

  return res.status(200).json({
    message: "Atualizado com sucesso!"
  })

}


module.exports = {
  getAll,
  createUsuario,
  deleteUsuario,
  editarUsuario
}