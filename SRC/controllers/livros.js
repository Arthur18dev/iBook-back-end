const db = require('../db/conexao')
const livrosModel = require('../models/livrosModel')


const Livraria = async (req, res) => {
        const [row] = await livrosModel.Livraria(res)
        return res.json(row)
      }


module.exports = {
    Livraria
}
