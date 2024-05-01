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


module.exports = {
    Livraria
}
