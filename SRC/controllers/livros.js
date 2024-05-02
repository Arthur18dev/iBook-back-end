const db = require('../db/conexao')
const livrosModel = require('../models/livrosModel')


const Livraria = async (req, res) => {
        const [row] = await livrosModel.Livraria(req)
        return res.json(row)
      }

      const LivrariaPorCategoria = async (req, res) => {
        const [row] = await livrosModel.LivrariaPorCategoria(req)
        return res.json(row)
      }



module.exports = {
    Livraria,
    LivrariaPorCategoria
}
