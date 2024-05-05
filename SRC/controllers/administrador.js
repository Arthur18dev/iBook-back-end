const administradorModel = require('../models/administradorModel')


const getAdministrador = async (req, res) => {
  const [row] = await administradorModel.getAdministrador(res)
  return res.json(row)
}

const createAdministrador = async (req, res) => {
  let { email, senha } = req.body;

  const usuarioID = await administradorModel.create(email, senha)

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
  let { email, senha } = req.body;
  let { id } = req.params;

  const result = await administradorModel.update(email, senha, id)

  return res.status(200).json({
    message: "Atualizado com sucesso!"
  })


}

const LogadoAdm = async (req, res) => {


  let { email, senha } = req.body

  if (!email) {
    return res.json({ message: "Email não pode ser vazio!", erro: true })
  }

  if (!senha) {
    return res.json({ message: "Senha não pode ser vazio!", erro: true })
  }

  // Verificar se existe Credenciais
  const result = await administradorModel.LogadoAdm(email, senha)

  if (result.length > 0) {
    return res.json({ message: "Login com sucesso!", erro: false })
  }


  return res.status(400).json({ message: "Login não encontrado!", erro: true })

}



module.exports = {
  getAdministrador,
  createAdministrador,
  deleteAdministrador,
  editarAdministrador,
  LogadoAdm
}