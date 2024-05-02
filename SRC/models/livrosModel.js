const db = require('../db/conexao')


const Livraria = async (res) => {

    const valor = db.execute('SELECT * FROM livros').then(
        (result) => {
            return result
        }
    ).catch(
        (erro) => {
            console.log(erro)
            return []
        }
    )
    return valor
};

const LivrariaPorCategoria = async (req) => {
    const valor = db.execute(`SELECT * FROM livros where categoria_id=${req.query.categoriaId}`).then(
        (result) => {
            return result
        }
    ).catch(
        (erro) => {
            console.log(erro)
            return []
        }
    )
    return valor
};


module.exports = {
    Livraria,
    LivrariaPorCategoria
}
