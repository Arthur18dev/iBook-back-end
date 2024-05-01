const db = require('../db/conexao')
const categoriaModel = require('../models/categoriaModel')


const destaque = async (req, res) => {

    let { nome } = req.body

    if (!nome) {
        return res.json({ message: "Destaque", erro: true })
    }

    // Verificar se existe Credenciais
    const result = await categoriaModel.destaque()

    if (result.length > 0) {
        return res.json({ message: "Login com sucesso!", erro: false })
    }


    return res.json({ message: "Login não encontrado!", erro: true })

}

module.exports = {
    destaque
}