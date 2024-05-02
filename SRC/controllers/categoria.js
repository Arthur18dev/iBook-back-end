const db = require('../db/conexao')
const categoriaModel = require('../models/categoriaModel')


const destaque = async (req, res) => {
    const [row] = await categoriaModel.destaque(res)
    return res.json(row)
  }



module.exports = {
    destaque
}