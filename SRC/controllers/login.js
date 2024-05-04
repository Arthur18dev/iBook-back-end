const db = require('../db/conexao')
const loginModel = require('../models/loginModel')


const Logado = async (req, res) => {


  let { email, senha } = req.body

  if (!email) {
    return res.json({ message: "Email não pode ser vazio!", erro: true })
  }

  if (!senha) {
    return res.json({ message: "Senha não pode ser vazio!", erro: true })
  }

  // Verificar se existe Credenciais
  const result = await loginModel.Logado( email, senha )

  if (result.length > 0) {
    return res.json({ message: "Login com sucesso!", erro: false })
  }


  return res.status(400).json({ message: "Login não encontrado!", erro: true })

}

module.exports = {
  Logado
}
